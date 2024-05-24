import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message: string) => ipcRenderer.send('message', message),
  createWindow:()=> ipcRenderer.send('create-main-window'),
  closeLoginAndRegisterWinwod:()=>ipcRenderer.send('close-login-register-window'),

  minimize: () => ipcRenderer.send('minimize-window'),
  maximize: () => ipcRenderer.send('maximize-window'),
  unmaximize:()=>ipcRenderer.send('unmaximize-window'),
  close: () => ipcRenderer.send('close-window')
})
