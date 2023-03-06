const url = require('url')
const path = require('path')
const { app, BrowserWindow, webContents } = require('electron')

let win

app.on('ready', function () {
  win = new BrowserWindow({
  height: 250, width: 350, webPreferences: { nodeIntegration: true, webviewTag: true, preload: path.join(__dirname, 'preload.js') } })

const options = { extraHeaders: 'pragma: no-cache\n'}
win.webContents.loadURL('https://tr.neox.in/softgame/?v=' + Date.now() + '', options) 
})
