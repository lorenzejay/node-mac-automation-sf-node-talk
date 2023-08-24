import '@jxa/global-type'
import { run } from '@jxa/run'

// const getWindowId = async (app) => {
//   return await run(() => {
//     const list = Application('System Events')
//       .applicationProcesses.where({ backgroundOnly: false })
//       .windows.name()

//     console.log('list', list)
//   })
// }
const getAppWindows = async (app) => {
  return await run((app) => {
    const se = Application('System Events').applicationProcesses.byName(app)

    console.log('se', se)
  }, app)
}
getAppWindows('Visual Studio Code')
