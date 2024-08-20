const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  // 메인 프로세스로부터 데이터를 받음
  ipcRenderer.invoke('get-session-data').then((sessionData) => {
    // 세션 스토리지에 데이터를 설정
    Object.keys(sessionData).forEach((key) => {
      sessionStorage.setItem(key, sessionData[key]);
    });
  });
});