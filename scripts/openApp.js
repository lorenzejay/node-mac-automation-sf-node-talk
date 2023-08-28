import '@jxa/global-type'
import { run } from '@jxa/run'

// return new ope app windowId
export const openApp = async (app) => {
  return await run((app) => {
    console.log('other apps opened', app)

    const application = Application(app)
    // application.includeStandardAdditions = true
    application.activate()
    delay(0.5)
  }, app)
}

// for (const filePaths of unifaiSurveyGenContext.workspacePaths) {
//   openTerminalInFilepath(filePaths)
// }
