import '@jxa/global-type'
import { run } from '@jxa/run'

export const openTerminalInFilepath = async (filePaths) => {
  return await run((filePaths) => {
    const terminal = Application('Terminal')
    terminal.includeStandardAdditions = true

    terminal.doScript() // opens
    terminal.activate() // puts it in front

    const window = terminal.windows[terminal.windows.length - 1]

    if (!window) {
      console.log('no window')
    }
    const tabs = window.tabs()
    if (!tabs) {
      console.log('no tabs')
    }

    for (let i = 0; i < filePaths.length; i++) {
      terminal.doScript(`cd "/${filePaths[i]}"`, {
        in: window,
        administratorPrivileges: false,
      })
      terminal.doScript(`code .`, {
        in: window,
        administratorPrivileges: false,
      })
    }

    // filePaths.forEach((filePath, i) => {
    //   console.log('index', +i + ' : ' + filePath)
    //   console.log('filePaths.length - 1=', filePaths.length - 1)

    // terminal.doScript(`cd "/${filePath}"`, { in: window })
    //   if (i !== 0 && i < filePaths.length - 1) {
    //     console.log('press cmd t')
    // const systemEvents = Application('System Events')
    // systemEvents.keystroke('t', { using: 'command down' })
    //   }
    //   // delay(0.5)

    //   // delay(0.5)

    //   // terminal.doScript(`cd "/${filePath}"`, { in: window })
    // })
    // for (const filePath of filePaths) {
    //   console.log('filepath', filePath)
    //   const terminal = Application('Terminal')
    //   terminal.includeStandardAdditions = true
    //   var window = terminal.Tab.whose({ busy: false })[0]; // Get the first non-busy Terminal tab

    //   console.log('window', window)
    //   if (!window) {
    //     // If there's no non-busy tab, create a new window
    //     terminal.doScript(''); // Open a new Terminal window
    //     window = terminal.terminal.whose({ busy: false })[0];
    // }

    // terminal.activate()

    // const currApp = Application.currentApplication()
    // currApp.includeStandardAdditions = true

    // currApp.doShellScript(`open "vscode://${filePath}"`, {
    //   administratorPrivileges: false,
    // })
    // }
  }, filePaths)
}

// for (const filePaths of unifaiSurveyGenContext.workspacePaths) {
//   openTerminalInFilepath(filePaths)
// }
