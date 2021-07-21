const { app, BrowserWindow } = require('electron')

const path = require("path");
const { URL } = require('url');

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({ 
		show: false, 
		autoHideMenuBar: true 
	});
	mainWindow.maximize();
	mainWindow.show();

	const indexFilePath = path.join(__dirname, `/dist/index.html`);
	mainWindow.loadFile(indexFilePath);
	
	// Open the DevTools.
	//mainWindow.webContents.openDevTools()

	mainWindow.on('closed', function () {
		mainWindow = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
	if (mainWindow === null) createWindow()
})