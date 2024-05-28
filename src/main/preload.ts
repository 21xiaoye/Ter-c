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

ipcRenderer.on('clear-local-storage', () => {
  localStorage.clear();
  userStore.outLogin();
  console.log("dqd");
  
  console.log('localStorage has been cleared.');
  // 发送响应回主进程（可选）
  ipcRenderer.send('clear-local-storage-response', 'localStorage has been cleared.');
});
