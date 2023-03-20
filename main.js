const path = require('path')
const { app, BrowserWindow, webContents } = require('electron')
let win1
let win2

app.on('ready', function () { win1 = new BrowserWindow({ height: 250, width: 350, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win1.webContents.loadURL('https://tr.neox.in/neoxgame/?v=' + Date.now() + '', options)
})

app.on('ready', function () { win2 = new BrowserWindow({ height: 250, width: 350, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win2.webContents.loadURL('https://tr.neox.in/neoxgame/?v=' + Date.now() + '', options)
})

