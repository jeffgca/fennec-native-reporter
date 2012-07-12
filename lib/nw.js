let utils = require('api-utils/window-utils');
exports.win =  {
  BrowserApp: utils.activeBrowserWindow.BrowserApp,
  NativeWindow: utils.activeBrowserWindow.NativeWindow
};
