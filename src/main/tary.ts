import { Tray, nativeImage, Menu, ipcMain } from 'electron';
import { mainWindow } from './window';
import path from 'node:path'

let tray: Tray | null = null;

export async function createTray() {
  const icon = nativeImage.createFromPath(path.join(__dirname, 'static/favicon.ico'),);
  tray = new Tray(icon);

  const contextMenu = Menu.buildFromTemplate([
    { label: '设置', type: 'normal' },
    { label: '关于 Ter', type: 'normal' },
    
    { label: '显示 Ter', click: ()=>{
        mainWindow?.show();
        mainWindow?.setSkipTaskbar(false);
    }},

    { type: 'separator' },
    { label: '退出 Ter', click: () => {
        mainWindow?.destroy();
    }},
    {
      label:"退出登录",click:()=>{
          mainWindow?.webContents.send('clear-local-storage');
      }
    }
  ]);

  tray.setToolTip('Ter');
  tray.setContextMenu(contextMenu);

  tray.on('click',()=>{
    mainWindow?.show();
  })
}

ipcMain.on('clear-local-storage-response', (event, arg) => {
  console.log(arg); // 打印来自渲染进程的响应
});