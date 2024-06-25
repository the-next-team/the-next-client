export { };

declare global {
  interface Window {
    electron: {
      isMac: boolean;
      ipcRenderer: {
        sendMessage: (channel: string, data: any) => void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
    };
  }
}
