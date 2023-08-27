import '@jxa/global-type'
import { run } from '@jxa/run'

// return new ope app windowId
export const openApp = async (app) => {
  return await run((app) => {
    const application = Application(app)
    application.includeStandardAdditions = true
    application.activate()

    console.log('opened:', app)
  }, app)
}

// for (const filePaths of unifaiSurveyGenContext.workspacePaths) {
//   openTerminalInFilepath(filePaths)
// }
