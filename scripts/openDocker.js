import '@jxa/global-type'
import { run } from '@jxa/run'

// return new ope app windowId
export const openDocker = async () => {
  return await run(() => {
    const application = Application('Docker')
    // application.includeStandardAdditions = true
    application.activate()
    delay(1)
  })
}
