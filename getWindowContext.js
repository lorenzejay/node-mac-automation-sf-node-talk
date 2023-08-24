import '@jxa/global-type'
import { run } from '@jxa/run'

// find tabs from windows
// window
export const getTabsFromWindow = async (windowId) => {
  return await run((windowId) => {
    const chrome = Application('Google Chrome')
    chrome.includeStandardAdditions = true

    const windows = chrome.windows()
    const foundWindow = windows.find((window) => window.id() == windowId)
    if (!foundWindow) return
    const tabs = []
    for (const tab of foundWindow.tabs()) {
      console.log('tab_title:', tab.title())
      console.log('tab_url:', tab.url())
      tabs.push({ title: tab.title(), url: tab.url() })
    }
    console.log('tabs', tabs)
    return tabs
  }, windowId)
}

// array of {urls}
export const populateWindowWithTabs = async (tabs) => {
  return await run((tabs) => {
    console.log('tabs', tabs)
    const chrome = Application('Google Chrome')
    chrome.includeStandardAdditions = true

    const newWindow = chrome.Window().make()
    for (i = 0; i < tabs.length; i++) {
      // set the url for the tab
      newWindow.tabs[i].url = tabs[i]

      // check to see if we have a next tab
      if (tabs[i + 1] !== undefined) {
        // create a new tab and push it to the window
        newWindow.tabs.push(new chrome.Tab())
      }
    }
  }, tabs)
}

const getWindowContext = async (contextWindowTabs) => {
  // get window context
  return await run((contextWindowTabs) => {
    // console.log('getTabsFromWindow', typeof getTabsFromWindow)
    if (!contextWindowTabs) return
    const chrome = Application('Google Chrome')
    chrome.includeStandardAdditions = true
    const newWindow = chrome.Window().make()
    const newWindowId = newWindow.id()

    if (!Array.isArray(contextWindowTabs)) return
    // loop through the links
    for (i = 0; i < contextWindowTabs.length; i++) {
      // set the url for the tab
      newWindow.tabs[i].url = contextWindowTabs[i]

      // check to see if we have a next tab
      if (contextWindowTabs[i + 1] !== undefined) {
        // create a new tab and push it to the window
        newWindow.tabs.push(new chrome.Tab())
      }
    }
    console.log('newWindowId', newWindowId)

    // console.log('newWindowIndex', newWindowId)
    // const tabs = getTabsFromWindow(newWindowId)
    // console.log('tabs', tabs)
    // find this windowIndex
    // const windows = chrome.windows()
    // const newWindowIndex = windows.findIndex(
    //   (window) => window.id() == newWindowId
    // )

    // if (newWindowIndex === -1) return

    // for (const tab of windows[newWindowIndex].tabs()) {
    //   console.log('tab_title:', tab.title())
    //   console.log('tab_url:', tab.url())
    //   // prompt the categories
    // }
    // console.log('newTab exists', JSON.stringify(chrome.Window()))
    // const newTab = newWindow.tabs.create({ url: 'github.com' })
    // newWindow.tabs().make({ url: 'https://github.com' })
    // console.log('newWindow tabs:', newWindow.tabs())

    // for (const url of contextWindowTabs) {
    //   newWindow.open(url)
    //   // const newTab = newWindow.Tab().make({ url })
    //   // console.log('newTab', newTab)
    //   // newWindow.tabs().push(newTab)
    // }

    // finding the new window
    // for (const window of windows) {
    //   console.log('typeof windows', window.id())
    //   console.log('window name', window.name())
    //   console.log('window given name', window.visible())
    //   for (const tab of window.tabs()) {
    //     console.log('tab title', tab.title())
    //     console.log('tab url', tab.url())
    //   }
    // }
    // return windows
  }, contextWindowTabs)
}

// get chrome
const urls = ['https://lorenzejay.dev', 'https://github.com']
async function call() {
  // await getWindowContext(urls)
  const tabs = await getTabsFromWindow('525221871')
  console.log('tabs', tabs)
}
call()
// getWindowContext(urls)
