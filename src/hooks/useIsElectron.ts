const useIsElectron = () => {
  if (typeof navigator === "undefined") return false;
  return navigator.userAgent.toLowerCase().includes("electron");
};

export default useIsElectron;
