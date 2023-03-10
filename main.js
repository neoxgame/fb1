const electron = require('electron')
const url = require('url')
const path = require('path')

const { app, BrowserWindow } = electron
let win

app.on('ready', function () { win = new BrowserWindow({ height: 250, width: 350, webPreferences: { nodeIntegration: true, webviewTag: true, preload: path.join(__dirname, 'preload.js')
}})
win.loadFile('index.html')
})
