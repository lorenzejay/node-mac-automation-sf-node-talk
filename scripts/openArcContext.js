import '@jxa/global-type'
import { run } from '@jxa/run'

export const openArcContext = async (context) => {
  return await run((context) => {
    console.log('context', context)
    const arc = Application('Arc')
    arc.includeStandardAdditions = true

    if (!arc) throw new Error('Arc doesnt exist')
    // console.log('windows', arc.windows.length)
    const windowsAmount = arc.windows.length
    if (windowsAmount < 1) {
      const newWindow = arc.Window()
      arc.windows.push(newWindow)
    }

    // delay(0.3)
    const windowAdded = arc.windows[0]
    // console.log('added a new window', windowAdded.name())
    // console.log('added a new window - id:', windowAdded.id())
    const windowAddedSpaces = windowAdded.spaces
    // console.log('windowAddedSpaces', windowAddedSpaces.length)

    // find where space name = context.spaceName
    if (!windowAddedSpaces) return 'no spaces'
    // console.log('context.spaceName', context.spaceName)

    for (let i = 0; i < windowAddedSpaces.length; i++) {
      const spaceId = windowAddedSpaces[i].id()
      const spaceName = windowAddedSpaces[i].name()
      const currentSpace = windowAddedSpaces[i]
      console.log('spaceName', spaceName)
      // console.log('context space name', context.spaceName)

      if (spaceName == context.spaceName) {
        console.log('matching space', spaceName)
        if (currentSpace.tabs.length == 0) {
          // populate the space with the amount of tabs or just make one
          // for (let t = 0; t < context.links.length; t++) {
          const newTab = arc.Tab()
          newTab.url = 'https://google.com'
          currentSpace.tabs.push(newTab)
          // }
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

    // console.log(
    //   'arc windows windowAddedSpaces.frontmost()',
    //   windowAdded.visible()
    // )

    arc.activate()
  }, context)
}

// test
// const call = async () => {
//   await openArcContext({
//     links: unifaiContext.browserLinks,
//     spaceName: unifaiContext.spaceName,
//     spaceId: unifaiContext.spaceId,
//   })
// }
