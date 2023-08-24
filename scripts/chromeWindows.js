// closeChromeWindow.jxa
const windowTitleToClose = 'Title of the Window to Close' // Replace with the actual window title you want to close

const chrome = Application('Google Chrome')
const windowList = chrome.windows()

for (const aWindow of windowList) {
  const windowTitle = aWindow.title()
  if (windowTitle.includes(windowTitleToClose)) {
    aWindow.close()
    break
  }
}
