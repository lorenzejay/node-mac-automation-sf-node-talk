import '@jxa/global-type'
import { run } from '@jxa/run'

export const getAppWindowId = async (context) => {
  return await run((context) => {
    const app = Application(context.app)
    // app.includeStandardAdditions = true

    console.log('app', app.windows.length)
    for (let i = 0; i < app.windows.length; i++) {
      const window = app.windows[i]
      console.log('windowId:', window.id())
    }
  }, context)
}

// test
getAppWindowId({ app: 'Visual Studio Code' })
