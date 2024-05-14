import { BrowserWindow,  app} from "electron";

export let loginRegisterWindow : BrowserWindow | null = null;
export let mainWindow : BrowserWindow | null = null;
const path = require('path');
import {join} from 'path';

export function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth:700,
    minHeight:525,
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
}

export function createdLoginRegisterWindow(){
  loginRegisterWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth:800,
    minHeight:600,
    // frame:false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), 
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  loginRegisterWindow.removeMenu();
  if (process.env.NODE_ENV === 'development') { 
    const rendererPort = process.argv[2];
    loginRegisterWindow.webContents.openDevTools();
    loginRegisterWindow.loadURL(`http://localhost:${rendererPort}/#/login`); 
  } else {
    loginRegisterWindow.loadFile(path.join(app.getAppPath(), 'renderer', 'index.html', '#/login'));
  }
}

