import '@jxa/global-type'
import { run } from '@jxa/run'
import { unifaiSurveyGenContext } from '../defaultContexts/context.js'

const openTerminalInFilepath = async (filePath) => {
  return await run((filePath) => {
    const app = Application('Terminal')
    app.includeStandardAdditions = true
    app.activate()

    app.open(filePath)
    const currApp = Application.currentApplication()
    currApp.includeStandardAdditions = true

    currApp.doShellScript(`open "vscode://${filePath}"`, {
      administratorPrivileges: false,
    })
  }, filePath)
}

for (const filePaths of unifaiSurveyGenContext.workspacePaths) {
  openTerminalInFilepath(filePaths)
}
