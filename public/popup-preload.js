const { contextBridge, ipcRenderer } = require("electron");

process.once("loaded", () => {
  window.ipcRenderer = ipcRenderer;
});

contextBridge.exposeInMainWorld("electron", {
  isMac: process.platform === "darwin",
  ipcRenderer: {
    sendMessage(channel, args) {
      ipcRenderer.send(channel, args);
    },
    on(channel, func) {
      const subscription = (event, ...args) => func(...args);
      ipcRenderer.on(channel, subscription);
      return () => ipcRenderer.removeListener(channel, subscription);
    },
  },
});

// 메인 프로세스로부터 데이터를 받음
ipcRenderer.invoke("get-session-data").then((sessionData) => {
  // 세션 스토리지에 데이터를 설정
  Object.keys(sessionData).forEach((key) => {
    sessionStorage.setItem(key, sessionData[key]);
  });
});

// 메인 프로세스로부터 데이터를 받음
ipcRenderer.invoke("get-storage-data").then((storageData) => {
  // 로컬 스토리지에 데이터를 설정
  Object.keys(storageData).forEach((key) => {
    localStorage.setItem(key, storageData[key]);
  });
});