import '@jxa/global-type'
import { run } from '@jxa/run'

import cron from 'node-cron'

// Function to show a dialog with options and get user selection

let todaysMode = ''
async function getUserSelection(options) {
  const buttonsString = options.join('","')
  const result = await run(`
    const app = Application.currentApplication();
    app.includeStandardAdditions = true;
    const buttons = ["${buttonsString}"];
    const chosenButton = app.chooseFromList(buttons, { withPrompt: "Select a mode:", defaultItems: buttons[0] });
    chosenButton[0] ? chosenButton[0] : null;
    return chosenButton[0]`)
  todaysMode = result
  return result
}

// List of available modes/options
const modeOptions = ['Work Mode', 'Writing Mode', 'Email']
const emailModeApps = ['_https://www.gmail.com', 'Brave Browser']
const workModeApps = ['Notion', 'Spotify', 'Visual Studio Code']

const askMode = async () => {
  console.log('running')
  const selectedMode = await getUserSelection(modeOptions)

  if (selectedMode) {
    if (selectedMode === 'Email') {
      for (const app of emailModeApps) {
        await openApp(app)
      }
    } else if (workModeApps) {
      for (const app of workModeApps) {
        await openApp(app)
      }
      console.log(`work mode`)
    }
    console.log(`Selected mode: ${selectedMode}`)
  } else {
    console.log('No mode selected.')
  }
}

async function openApp(app) {
  if (app.startsWith('_')) {
    let url = app.substring(1)
    console.log('url', url)
    return await run(`
      const app = Application('Google Chrome');
      app.includeStandardAdditions = true;
      app.activate();
      app.openLocation("${url}");
    `)
  } else if (app === 'Visual Studio Code') {
    console.log('running vs code at specific workspace')
    return await run(`
      const app = Application('Visual Studio Code').open('/Users/lorenzejay/workspace/stateful/runme.dev');
      app.activate();
  `)
  }
  await run(`
    const app = Application("${app}");
    app.activate();
  `)
}
const urls = ['https://lorenzejay.dev', 'https://github.com']
async function getWindowContext(contextWindowTabs) {
  // get window context
  console.log('contextWindowTabs', typeof contextWindowTabs)
  if (!contextWindowTabs) return
  return await run(() => {
    const chrome = Application('Google Chrome')
    chrome.includeStandardAdditions = true
    // opening specific tabs

    const windows = chrome.windows()

    // new window with tabs

    const newWindow = chrome.Window() //opens a new window
    // console.log('contextWindowTabs', contextWindowTabs)
    for (const url of contextWindowTabs) {
      const newTab = newWindow.Tab({ url })
      newWindow.tabs.push(newTab)
    }
    newWindow.activate()

    // finding the new window
    for (const window of windows) {
      console.log('typeof windows', window.id())
      console.log('window name', window.name())
      console.log('window given name', window.visible())
      for (const tab of window.tabs()) {
        console.log('tab title', tab.title())
        console.log('tab url', tab.url())
      }
    }
    return windows
    // return SystemEvents.currentUser().name()
    // console.log('windows', windows)
    // return windows
    // chrome.includeStandardAdditions = true
    // chrome.activate()

    // const windows = chrome.windows

    // if (windows && windows.length > 0) {
    //   console.log('there are windows')
    //   for (const window of windows) {
    //     console.log('window:', window.activeTab())
    //   }
    // }
  })
  // const result = await run(`
  //   const chromeWindows = Application('Google Chrome')
  //   console.log('chromeWindows',chromeWindows)
  //   // chromeWindows.includeStandardAdditions = true
  //   // const windowList = chromeWindows.windows()
  //   // for (const window of windowList){
  //   //   console.log('window', window)
  //   // }
  // `)
  // console.log('result', result)
  // depending on todaysMode get the apps that were opened.
  // we will then ask if you would want to close these apps
  // close apps
  // save an instance of which mode
}

// get chrome
async function call() {
  await getWindowContext(urls)
}
call()
// cron.schedule('58 11 * * 1-7', askMode)
// cron.schedule('59 11 * * 1-7', closeDay)
