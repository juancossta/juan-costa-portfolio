const { BrowserWindow } = require("electron");
const path = require("path");

function createMainWindow() {

  const win = new BrowserWindow({

    width: 1440,
    height: 900,

    minWidth: 1200,
    minHeight: 700,

    autoHideMenuBar: true,

    backgroundColor: "#050816",

    title: "Juan Costa Portfolio",

    webPreferences: {

      preload: path.join(__dirname, "preload.js"),

      contextIsolation: true,
      nodeIntegration: false

    }

  });

  win.loadFile("../index.html");

}

module.exports = createMainWindow;