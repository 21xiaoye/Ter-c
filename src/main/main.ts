import {app, BrowserWindow, ipcMain, session} from 'electron';
import { createWindow,mainWindow} from './window';
import { createTray } from './tary'
const path = require('path');


app.whenReady().then(() => {
  createWindow();
  // createTray();
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['script-src \'self\'']
      }
    })
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }else{
      mainWindow?.setSkipTaskbar(false)
    }
  });
});
app.disableHardwareAcceleration();
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

ipcMain.on('message', (event, message) => {
  if (process.env.NODE_ENV === 'development') {
    const rendererPort = process.argv[2];
    let path = `http://localhost:${rendererPort}/#${message}`
    console.log(path);
    
    mainWindow?.loadURL(`http://localhost:${rendererPort}/#${message}`);
  }else{
    // mainWindow?.loadFile(`file://${path.join(app.getAppPath(), 'renderer', 'index.html')}#${message}`);
    mainWindow?.loadFile(path.join(app.getAppPath(), 'renderer', 'index.html', `#${path}`));
  }
})



ipcMain.on('minimize-window', () => {
  if(mainWindow){
    mainWindow?.minimize();
  }
});

ipcMain.on('maximize-window', () => {
  if(mainWindow){
    mainWindow?.maximize();
  }
});

ipcMain.on('close-window', () => {
  if(mainWindow){
    mainWindow?.close();
  }
});

ipcMain.on('unmaximize-window',()=>{
  if(mainWindow){
    mainWindow?.unmaximize();
  }
})