// const { app, BrowserWindow } = require('electron');
// const path = require('path');

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'),
//       nodeIntegration: false,
//       contextIsolation: true
//     }
//   });

//   if (process.env.NODE_ENV === 'development') {
//     win.loadURL('http://localhost:3000');
//   } else {
//     // In production: load built React index.html
//     win.loadFile(path.join(__dirname, 'build', 'index.html'));
//   }
// }


// app.whenReady().then(() => {
//     createWindow();
  
//     app.on('activate', function () {
//       if (BrowserWindow.getAllWindows().length === 0) createWindow();
//     });
//   });
  
//   app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') app.quit();
//   });
  