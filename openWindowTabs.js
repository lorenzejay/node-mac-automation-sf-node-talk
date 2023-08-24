// grab the chrome object
var chrome = Application('Google Chrome')

// create a new chrome window
var window = chrome.Window().make()

// set the links you want to open
var links = ['https://github.com', 'https://linear.app']

// loop through the links
for (i = 0; i < links.length; i++) {
  // set the url for the tab
  window.tabs[i].url = links[i]

  // check to see if we have a next tab
  if (links[i + 1] !== undefined) {
    // create a new tab and push it to the window
    window.tabs.push(new chrome.Tab())
  }
}
