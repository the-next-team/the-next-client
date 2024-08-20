export { };

declare global {
  interface Window {
    electron: {
      isMac: boolean;
      ipcRenderer: {
        sendMessage: (channel: string, data: any) => void;

        /**
         * Registers a listener to be invoked every time an event is emitted on the given channel.
         *
         * @param channel - The channel name for the event.
         * @param listener - The callback function that will be invoked with the event data.
         * @returns A function to remove the listener or undefined if registration fails.
         */
        on: (channel: string, listener: (...args: any[]) => void) => () => void | undefined;

        /**
         * Registers a one-time listener to be invoked the next time an event is emitted on the given channel.
         *
         * @param channel - The channel name for the event.
         * @param listener - The callback function that will be invoked with the event data.
         */
        once: (channel: string, listener: (...args: any[]) => void) => void;

        /**
         * Removes a specific listener for the given channel.
         *
         * @param channel - The channel name for the event.
         * @param listener - The specific listener function to remove.
         */
        removeListener: (channel: string, listener: (...args: any[]) => void) => void;

        /**
         * Removes all listeners for the given channel.
         *
         * @param channel - The channel name for the event.
         */
        removeAllListeners: (channel: string) => void;
      };
    },
    JSZip: typeof JSZip;
  }
}
