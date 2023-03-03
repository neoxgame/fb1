const { app, BrowserWindow, webContents } = require('electron')
const url = require('url')
const path = require('path')


app.whenReady().then(() => {
const mainWindow = new BrowserWindow({
height: 250, width: 350, webPreferences: { nodeIntegration: true, enableRemoteModule: true, preload: path.join(__dirname, 'preload.js') } })

var UserAgent = [
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 OPR/93.0.0.0 (Edition std-1)',
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41',
    'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 13.2; rv:109.0) Gecko/20100101 Firefox/109.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 YaBrowser/23.1.2 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 YaBrowser/23.1.2 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 YaBrowser/23.1.2 Yowser/2.5 Safari/537.36',   
    ];

 function USER1() {
    mainWindow.webContents.setUserAgent(UserAgent[Math.floor(Math.random()*UserAgent.length)]); 
    const options = { extraHeaders: 'pragma: no-cache\n' , httpReferrer: 'http://www.googleadservices.com/pagead/aclk?sa=loding_page' }
    mainWindow.webContents.loadURL('https://tr.neox.in/fb/main.php?v=' + Date.now() + '', options)
  } setInterval(USER1, 60000)
})
