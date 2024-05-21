let { contextBridge, ipcRenderer } = require("electron");

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

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  // we can also expose variables, not just functions
});

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
