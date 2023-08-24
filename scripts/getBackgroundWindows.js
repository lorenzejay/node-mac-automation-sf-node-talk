import '@jxa/global-type'
import { run } from '@jxa/run'

const showBgWindows = async () => {
  return await run(() => {
    const listNames = Application('System Events')
      .applicationProcesses.where({ backgroundOnly: false })
      .windows.name()

    // for (const list of listIds) {
    //   console.log('list', list.name())
    // }

    // console.log('listNames', listNames)
    console.log('listIds', listNames)
  })
}
showBgWindows()
