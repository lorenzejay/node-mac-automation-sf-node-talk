import '@jxa/global-type'
import { run } from '@jxa/run'

const closeApp = async (app) => {
  return await run((app) => {
    const appToClose = Application(app)

    appToClose.quit()
  }, app)
}
