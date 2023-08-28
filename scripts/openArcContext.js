import '@jxa/global-type'
import { run } from '@jxa/run'

export const openArcContext = async (context) => {
  return await run((context) => {
    const arc = Application('Arc')
    arc.includeStandardAdditions = true
    arc.activate()

    if (!arc) throw new Error('Arc doesnt exist')
    const windowsAmount = arc.windows.length
    if (windowsAmount < 1) {
      const newWindow = arc.Window()
      arc.windows.push(newWindow)
    }

    // delay(0.3)
    const windowAdded = arc.windows[0]
    const windowAddedSpaces = windowAdded.spaces

    if (!windowAddedSpaces) return 'no spaces'

    for (let i = 0; i < windowAddedSpaces.length; i++) {
      const spaceName = windowAddedSpaces[i].name()
      const currentSpace = windowAddedSpaces[i]
      console.log('spaceName', spaceName)

      if (spaceName == context.spaceName) {
        if (currentSpace.tabs.length == 0) {
          const newTab = arc.Tab()
          newTab.url = 'https://google.com'
          currentSpace.tabs.push(newTab)
        }
        delay(0.3)
        // now we should have tabs
        console.log('space tabs length:', currentSpace.tabs.length)
        for (let l = 0; l < context.links.length; l++) {
          const link = context.links[l]
          currentSpace.tabs[l].url = link
          console.log(link + ' added')
          if (context.links[l + 1] !== undefined) {
            console.log('theres more links')
            const newTab = arc.Tab()
            newTab.url = context.links[l + 1]
            currentSpace.tabs.push(newTab)
          }
        }
        currentSpace.focus()
      }
    }
  }, context)
}
