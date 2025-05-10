const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 700,
        minWidth: 900,
        minHeight: 700,
        icon: path.join(__dirname, 'public', 'logo.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
    });
    if (app.isPackaged) {
        // Khi đóng gói, load file index.html từ build React
        win.loadFile(path.join(__dirname, '../build/index.html'));
    } else {
        win.loadURL('http://localhost:3000');
        // win.webContents.openDevTools();
    }
}
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
