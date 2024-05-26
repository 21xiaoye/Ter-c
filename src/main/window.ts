import { BrowserWindow,  app, ipcMain} from "electron";

export let loginRegisterWindow : BrowserWindow | null = null;
export let mainWindow : BrowserWindow | null = null;
const path = require('path');
import {join} from 'path';

export function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth:800,
    minHeight:525,
    icon: path.join(__dirname, 'static/favicon.ico'),
    frame:false,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  mainWindow.removeMenu();

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
    const rendererPort = process.argv[2];
    mainWindow.loadURL(`http://localhost:${rendererPort}`);
  }
  else {
    mainWindow.loadFile(join(app.getAppPath(), 'renderer', 'index.html'));
  }

  mainWindow.on('close', (event) => {
    mainWindow?.hide();
    mainWindow?.setSkipTaskbar(true);
    event.preventDefault();
  });
}
export function createdLoginRegisterWindow(){
  loginRegisterWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth:800,
    minHeight:600,
    icon: path.join(__dirname, 'static/favicon.ico'),
    title:"cw",
    frame:false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), 
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  
  loginRegisterWindow.on('close',()=>{
    loginRegisterWindow = null;
  })

  loginRegisterWindow.removeMenu();
  if (process.env.NODE_ENV === 'development') { 
    const rendererPort = process.argv[2];
    loginRegisterWindow.webContents.openDevTools();
    loginRegisterWindow.loadURL(`http://localhost:${rendererPort}/#/login`); 
  } else {
    loginRegisterWindow.loadFile(path.join(app.getAppPath(), 'renderer', 'index.html', '#/login'));
  }
}

