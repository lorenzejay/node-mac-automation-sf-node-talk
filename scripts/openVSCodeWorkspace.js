import '@jxa/global-type'
import { run } from '@jxa/run'

export const openVSCodeWorkspace = async (filePath) => {
  return await run((filePath) => {
    const app = Application.currentApplication()
    app.includeStandardAdditions = true

    var isDirectory = app.doShellScript(
      '[ -d "' + filePath + '" ] && echo "true" || echo "false"'
    )

    console.log('isDirectory', isDirectory)

    if (isDirectory) {
      const result = app.doShellScript('open vscode://file' + filePath)
    }
  }, filePath)
}

// test
openVSCodeWorkspace(
  `"/Users/lorenzejay/Documents/Uplift Digital Solutions/clients/unifai/Unifai-Frontend"`
)
