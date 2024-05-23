import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message: string) => ipcRenderer.send('message', message),
  createLoginAndRegisterWindow:()=> ipcRenderer.send('create-login-register-window'),
  closeLoginAndRegisterWinwod:()=>ipcRenderer.send('close-login-register-window'),
})
