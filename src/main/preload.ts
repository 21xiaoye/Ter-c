import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message: string) => ipcRenderer.send('message', message),
  createWindow:()=> ipcRenderer.send('create-main-window'),
  closeLoginAndRegisterWinwod:()=>ipcRenderer.send('close-login-register-window'),
})
