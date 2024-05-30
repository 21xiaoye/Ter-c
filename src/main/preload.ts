import {contextBridge, ipcRenderer} from 'electron';
import {useUserStore} from '../renderer/stores/user'
const userStore = useUserStore();

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message: string) => ipcRenderer.send('message', message),
  minimize: () => ipcRenderer.send('minimize-window'),
  maximize: () => ipcRenderer.send('maximize-window'),
  unmaximize:()=>ipcRenderer.send('unmaximize-window'),
  close: () => ipcRenderer.send('close-window')
})
