import '@jxa/global-type'
import { run } from '@jxa/run'

export const openTerminalInFilepath = async (context) => {
  return await run((context) => {
    const { filePaths, commands } = context
    const terminal = Application('Terminal')
    terminal.includeStandardAdditions = true

    // terminal.doScript() // opens

    const window = terminal.windows[terminal.windows.length - 1]

    if (!window) {
      console.log('no window')
    }
    // const tabs = window.tabs()
    // if (!tabs) {
    //   console.log('no tabs')
    // }

    for (let i = 0; i < filePaths.length; i++) {
      terminal.doScript() // opens a new window
      terminal.doScript(`cd "/${filePaths[i]}"`, {
        in: window,
        administratorPrivileges: false,
      })
      terminal.doScript(`code .`, {
        in: window,
        administratorPrivileges: false,
      })
      terminal.doScript(`${commands[i]}`, {
        in: window,
        administratorPrivileges: false,
      })
    }
    terminal.activate() // puts it in front
  }, context)
}
