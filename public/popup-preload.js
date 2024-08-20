const { ipcRenderer } = require("electron");
const log = require("electron-log");

// 메인 프로세스로부터 데이터를 받음
ipcRenderer.invoke("get-session-data").then((sessionData) => {
  log.info("sessionData...", sessionData);

  // 세션 스토리지에 데이터를 설정
  Object.keys(sessionData).forEach((key) => {
    sessionStorage.setItem(key, sessionData[key]);
  });
});

// 메인 프로세스로부터 데이터를 받음
ipcRenderer.invoke("get-storage-data").then((storageData) => {
  log.info("storageData...", storageData);

  // 세션 스토리지에 데이터를 설정
  Object.keys(storageData).forEach((key) => {
    localStorage.setItem(key, storageData[key]);
  });
});