import '@jxa/global-type'
import { run } from '@jxa/run'

export const openTerminalInFilepath = async (context) => {
  return await run((context) => {
    const { filePaths, commands, usesDocker } = context
    const terminal = Application('Terminal')
    terminal.includeStandardAdditions = true

    if (terminal.running()) {
      terminal.activate()
    } else {
      terminal.launch()
      terminal.activate()
    }

    // create the terminal windows so we can specify which window to run the command in
    for (let i = 0; i < filePaths.length; i++) {
      terminal.doScript()
      delay(0.5)
    }

    for (let i = 0; i < filePaths.length; i++) {
      const window = terminal.windows[i]
      // console.log('opening:', filePaths[i])

      terminal.doScript(`cd "/${filePaths[i]}"`, {
        in: window,
        administratorPrivileges: false,
      })
      delay(0.5)
      if (usesDocker && i === 0) {
        terminal.doScript(`docker compose up -d`, {
          in: window,
          administratorPrivileges: false,
        })
        delay(0.5)
      }

      terminal.doScript(`code .`, {
        in: window,
        administratorPrivileges: false,
      })
      delay(0.5)

      terminal.doScript(`${commands[i]}`, {
        in: window,
        administratorPrivileges: false,
      })
    }
  }, context)
}
