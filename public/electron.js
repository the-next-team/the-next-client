const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const { autoUpdater } = require("electron-updater");
const log = require("electron-log");
const path = require("path");

// Local Update TEST
Object.defineProperty(app, "isPackaged", {
  get() {
    return true;
  },
});

//
log.transports.file.level = "info";

//-------------------------------------------------------------------
// Logging
//
// THIS SECTION IS NOT REQUIRED
//
// This logging setup is not required for auto-updates to work,
// but it sure makes debugging easier :)
//-------------------------------------------------------------------
log.info("App starting...");

//-------------------------------------------------------------------
// Open a window that displays the version
//
// THIS SECTION IS NOT REQUIRED
//
// This isn't required for auto-updates to work, but it's easier
// for the app to show a window than to have to click "About" to see
// that updates are working.
//-------------------------------------------------------------------
let updateWindow;
let win;

function sendStatusToWindow(text) {
  log.info(text);
  win?.webContents.send("message", text);
}

const createUpdateWindow = () => {
  updateWindow = new BrowserWindow({
    show: false,
    width: 300,
    height: 300,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  updateWindow.loadFile(path.join(__dirname, "../build/version.html"));
  updateWindow.webContents.openDevTools({ mode: "detach" });
};

const createWindow = () => {
  win = new BrowserWindow({
    show: false,
    minWidth: 1200,
    minHeight: 800,
    width: 1600,
    height: 960,
    // transparent: true,
    // frame: false,
    autoHideMenuBar: true,
    // show: false,
    // titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true, // 이 옵션을 true로 유지하는 것이 좋습니다.
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.mode === "dev") {
    win?.loadURL("http://localhost:3000");
    win?.webContents.openDevTools({ mode: "detach" });
  } else {
    // win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    win?.loadFile(path.join(__dirname, "../build/index.html"));
  }

  win?.once("ready-to-show", () => win?.show());
  win?.on("closed", () => {
    win = null;
  });
};

///////////////////
// Auto upadater //
///////////////////
app.commandLine.appendSwitch("disable-http2");
autoUpdater.requestHeaders = {
  "PRIVATE-TOKEN": "glpat-Z5uzB67taSze-WLbV6DG",
  "Cache-Control":
    "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
};
autoUpdater.autoDownload = false;
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";

// 사용 가능한 업데이트가 있을 때 발생, 업데이트가 자동으로 다운로드
autoUpdater.on("update-available", (info) => {
  log.info("update-available...");
  dialog
    .showMessageBox(win, {
      type: "info",
      title: "업데이트 가능",
      message: "새로운 버전이 있습니다. 다운로드하시겠습니까?",
      buttons: ["업데이트", "나중에"],
    })
    .then((result) => {
      if (result.response === 0) {
        autoUpdater.downloadUpdate();
      }
    });

  sendStatusToWindow("Update available.");
});

autoUpdater.on("update-downloaded", () => {
  log.info("update-downloaded...");
  sendStatusToWindow("Update has been downloaded....");

  dialog
    .showMessageBox({
      title: "업데이트 설치",
      message:
        "업데이트가 다운로드되었습니다. 앱을 재시작하여 업데이트를 적용하시겠습니까?",
    })
    .then((result) => {
      if (result.response === 0) {
        autoUpdater.quitAndInstall();
      }
    });
});

ipcMain.on("restart_app", () => {
  sendStatusToWindow("In onRestart_App");
  autoUpdater.quitAndInstall();
});

// 업데이트가 시작되었는지 확인할 때 발생합니다.
autoUpdater.on("checking-for-update", () => {
  log.info("checking-for-update...");
  sendStatusToWindow("checking-for-update...");
});

// 사용 가능한 업데이트가 없을 때 발생
autoUpdater.on("update-not-available", (info) => {
  log.info("update-not-available...");
  sendStatusToWindow("Update not available.");

  updateWindow.close();
  createWindow();

  // dialog.showMessageBox(win, {
  //   type: "info",
  //   buttons: ["확인"],
  //   message: "현재 사용 가능한 업데이트가 없습니다.",
  // });
});

// 업데이트하는 동안 오류가 발생하면 발생
autoUpdater.on("error", (err) => {
  log.info("error...");
  sendStatusToWindow("Error in auto-updater. " + err);

  updateWindow.close();
  createWindow();

  // dialog.showMessageBox(win, {
  //   type: "error",
  //   buttons: ["확인"],
  //   message: "Error in auto-updater. " + err,
  // });
});

autoUpdater.on("download-progress", function (progressObj) {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + " - Downloaded " + progressObj.percent + "%";
  log_message =
    log_message +
    " (" +
    progressObj.transferred +
    "/" +
    progressObj.total +
    ")";
  sendStatusToWindow(log_message);
});

// Check for an update 10sec after Program Starts
// setTimeout(function () {
//   sendStatusToWindow('We are checking for updates and notifying user...')
//   autoUpdater.checkForUpdatesAndNotify()
// }, 10000)

// Check for an update every 2min.
// setInterval(function () {
//   sendStatusToWindow('We are checking for updates and notifying user...')
//   autoUpdater.checkForUpdatesAndNotify()
// }, 120000)

/**
 * TitleBar Event [START]
 */
ipcMain.on("minimizeApp", () => {
  win?.minimize();
});
ipcMain.on("maximizeApp", () => {
  if (win?.isMaximized()) {
    win?.unmaximize();
  } else {
    win?.maximize();
  }
});
ipcMain.on("closeApp", () => {
  win?.close();
});
/**
 * TitleBar Event [END]
 */

/**
 * AppVersion [START]
 */
ipcMain.on("app-version", (event) => {
  event.reply("app-version", app.getVersion());
});
/**
 * AppVersion [END]
 */

//
// CHOOSE one of the following options for Auto updates
//
//-------------------------------------------------------------------
// Auto updates - Option 1 - Simplest version
//
// This will immediately download an update, then install when the
// app quits.
//-------------------------------------------------------------------
app.whenReady().then(() => {
  createUpdateWindow();

  ipcMain.handle("ping", () => "pong");

  // autoUpdater.checkForUpdatesAndNotify();
  autoUpdater.checkForUpdates();

  if (process.env.NODE_ENV === "development") {
    // autoUpdater.checkForUpdates(); // 개발 모드에서 업데이트 검사 강제 실행
  }

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

//-------------------------------------------------------------------
// Auto updates - Option 2 - More control
//
// For details about these events, see the Wiki:
// https://github.com/electron-userland/electron-builder/wiki/Auto-Update#events
//
// The app doesn't need to listen to any events except `update-downloaded`
//
// Uncomment any of the below events to listen for them.  Also,
// look in the previous section to see them being used.
//-------------------------------------------------------------------
// app.on('ready', function()  {
//   autoUpdater.checkForUpdates();
// });
// autoUpdater.on('checking-for-update', () => {
// })
// autoUpdater.on('update-available', (info) => {
// })
// autoUpdater.on('update-not-available', (info) => {
// })
// autoUpdater.on('error', (err) => {
// })
// autoUpdater.on('download-progress', (progressObj) => {
// })
// autoUpdater.on('update-downloaded', (info) => {
//   autoUpdater.quitAndInstall();
// })

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

/**
 * 전역 예외 핸들러 설정
 */
process.on("uncaughtException", (error) => {
  console.error("전역 예외 발생:", error);
  // 필요한 오류 처리 로직을 여기에 추가
});
