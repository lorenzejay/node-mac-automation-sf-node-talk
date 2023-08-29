import '@jxa/global-type'
import { run } from '@jxa/run'
import { contextSelections } from './defaultContexts/context.js'
import { openTerminalInFilepath } from './scripts/openTerminalContext.js'
import { openApp } from './scripts/openApp.js'
import { openArcContext } from './scripts/openArcContext.js'
import { openDocker } from './scripts/openDocker.js'

async function getUserSelection(appContexts) {
  return await run((appContexts) => {
    const app = Application.currentApplication()
    app.includeStandardAdditions = true
    const options = appContexts.map((context) => context.title)
    const chosenButton = app.chooseFromList(options, {
      withPrompt: 'Select workspace:',
      defaultItems: options[0],
    })

    chosenButton[0] ? chosenButton[0] : null
    return appContexts.find((context) => context.title == chosenButton)
  }, appContexts)
}

const automateWorkspace = async () => {
  try {
    const selectedWorkspace = await getUserSelection(contextSelections)
    if (!selectedWorkspace) return 'no selected apps'
    for (let app of selectedWorkspace.applications) {
      if (app == 'Docker') {
        await openDocker('Docker')
        console.log('opening docker')
      }
      if (app == 'Terminal') {
        console.log('opening terminal')
        await openTerminalInFilepath({
          filePaths: selectedWorkspace.workspacePaths,
          commands: selectedWorkspace.workspaceCommands,
        })
      } else if (app == 'Arc') {
        console.log('opening arc')
        await openArcContext({
          links: selectedWorkspace.browserLinks,
          spaceName: selectedWorkspace.spaceName,
        })
      } else {
        console.log('not arc or terminal')
        return await openApp(app)
      }
    }
    return selectedWorkspace
  } catch (error) {
    throw new Error(error?.message)
  }
}

automateWorkspace()
