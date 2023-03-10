const electron = require('electron')
const url = require('url')
const path = require('path')

const { app, BrowserWindow } = electron
let win

app.on('ready', function () { win = new BrowserWindow({ height: 250, width: 350, webPreferences: { nodeIntegration: true, webviewTag: true
}})
function USER1() { win.loadFile('index.html') } setInterval(USER1, 300000)
})
app.on('web-contents-created', (_event, contents) => {
  contents.on('will-attach-webview', (_wawevent, webPreferences, _params) => {
    webPreferences.preloadURL = `file://${__dirname}/preload.js`;
  });
});
