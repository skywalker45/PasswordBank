const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
let win;

function isDev() {
  return process.mainModule.filename.indexOf('app.asar') === -1;
};
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, '../dist/PasswordBank/index.html'),
    protocol: 'file',
    slashes: true
  }));

  win.on('closed', () => {
    win = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})