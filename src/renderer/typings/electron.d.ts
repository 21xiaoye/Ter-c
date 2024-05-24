/**
 * Should match main/preload.ts for typescript support in renderer
 */
export default interface ElectronApi {
  sendMessage: (message: string) => void
  createWindow :() => void
  closeLoginAndRegisterWinwod:()=> void

  minimize: () => void 
  maximize: () => void
  close: () => void
  unmaximize: () => void
}

declare global {
  interface Window {
    electronAPI: ElectronApi,
    globalCommonAPI: {
          swichRouter:(path :string) => void;
      };
  }
}
