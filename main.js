import '@jxa/global-type'
import { run } from '@jxa/run'
import { contextSelections } from './defaultContexts/context.js'
import { openTerminalInFilepath } from './scripts/openTerminalContext.js'
import { openApp } from './scripts/openApp.js'
import { openArcContext } from './scripts/openArcContext.js'

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

    console.log('selectedWorkspace', selectedWorkspace)
    for (const app of selectedWorkspace.applications) {
      if (app == 'Terminal') {
        await openTerminalInFilepath({
          filePaths: selectedWorkspace.workspacePaths,
          commands: selectedWorkspace.workspaceCommands,
        })
        continue
      }

      if (app == 'Arc') {
        await openArcContext({
          links: selectedWorkspace.browserLinks,
          spaceName: selectedWorkspace.spaceName,
        })
        continue
      }

      return await openApp(app)
    }
  } catch (error) {
    throw new Error(error?.message)
  }
}

automateWorkspace()
