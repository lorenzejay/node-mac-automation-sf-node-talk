import '@jxa/global-type'
import { run } from '@jxa/run'

const showBgWindows = async () => {
  return await run(() => {
    // const bgWindowsNames = Application('System Events')
    //   .processes.where({
    //     backgroundOnly: false,
    //   })
    //   .windows.name()
    const bgWindows = Application('System Events').windows()

    // const listNames = Application('System Events').processes.windows.name()
    // const listIds = Application('System Events').processes.windows.id()

    for (let i = 0; i < bgWindows.length; i++) {
      const windowName = bgWindows[i].name()
      console.log(`app - `, windowName)
      ret
      // const windowName = bgWindowsNames[i]
      if (windowName.includes('Spotify')) {
        console.log('close window - ', windowName)
        console
          .log(
            'app to close ',
            bgWindows[i].process.where({
              acceptsHighLevelEvents: true,
            })
          )
          .name()
      }
    }
  })
}
showBgWindows()
