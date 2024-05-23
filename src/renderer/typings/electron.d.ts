/**
 * Should match main/preload.ts for typescript support in renderer
 */
export default interface ElectronApi {
  sendMessage: (message: string) => void
  createWindow :() => void
  closeLoginAndRegisterWinwod:()=> void
}

declare global {
  interface Window {
    electronAPI: ElectronApi,
    globalCommonAPI: {
          swichRouter:(path :string) => void;
      };
  }
}
