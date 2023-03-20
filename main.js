const path = require('path')
const { app, BrowserWindow, webContents } = require('electron')
let win1
let win2
let win3
app.on('ready', function () { win1 = new BrowserWindow({ height: 250, width: 350, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win1.webContents.loadURL('https://tr.neox.in/neoxgame/?v=' + Date.now() + '', options)
})

app.on('ready', function () { win2 = new BrowserWindow({ height: 250, width: 350, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win2.webContents.loadURL('https://tr.neox.in/neoxgame/?v=' + Date.now() + '', options)
})

app.on('ready', function () { win3 = new BrowserWindow({ height: 250, width: 350, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win3.webContents.loadURL('https://tr.neox.in/softgame/?v=' + Date.now() + '', options)
})

app.on('web-contents-created', (_event, contents) => {
  contents.on('will-attach-webview', (_wawevent, webPreferences, _params) => {
    webPreferences.preloadURL = `file://${__dirname}/preload.js`;
  })
 }) 
