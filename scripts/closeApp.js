import '@jxa/global-type'
import { run } from '@jxa/run'
import { unifaiSurveyGenContext } from '../defaultContexts/context.js'

const closeApp = async (app) => {
  return await run((app) => {
    const appToClose = Application(app)

    appToClose.quit()
  }, app)
}

for (const app of unifaiSurveyGenContext.applications) {
  closeApp(app)
}
