import { app, BrowserWindow, screen, Menu, webContents,} from 'electron';
import * as path from 'path';




let win, serve;
let contents = webContents;

const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

if (serve) {
  require('electron-reload')(__dirname, {
  });
}

const template = [
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      {role: 'forcereload'},
      {role: 'toggledevtools'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {role: 'togglefullscreen'}
    ]
  },
      {
        label: 'Print',
        click () { win.webContents.print({silent: false, printBackground: false, deviceName: ''})}
      },
]


const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);


function createWindow() {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;
 
  // Create the browser window.
  win = new BrowserWindow({
    // frame:false,
    backgroundColor: '#2196F3',
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
  });
 
  
  // win.setMenu(null);

  
  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/index.html');
  // Open the DevTools.
  // if (serve) {
  //   win.webContents.openDevTools();
  // }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

try {
   
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}

