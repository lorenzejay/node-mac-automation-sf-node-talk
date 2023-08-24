import '@jxa/global-type'
import { run } from '@jxa/run'
import { contextSelections } from './defaultContexts/context.js'

// open dialog text with context selections
export const openDialog = async () => {
  return await run((contextSelections) => {
    const buttonStrings = contextSelections.map((wk) => wk.title)
    // get selection
    const app = Application.currentApplication()
    app.includeStandardAdditions = true
    const chosenButton = app.chooseFromList(buttonStrings, {
      withPrompt: 'Select a workspace:',
      defaultItems: buttonStrings[0],
      multipleSelectionsAllowed: false,
    })
    chosenButton[0] ? chosenButton[0] : null
    // find the context from the chosen list
    // comparing by name is not a good idea
    return contextSelections.find((wk) => wk.title === chosenButton[0])
  }, contextSelections)
}

// test
// async function call() {
//   const selection = await openDialog()
// }
// call()
