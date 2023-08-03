import { runJxa } from 'run-jxa'
import cron from 'node-cron'
// Function to show a dialog with options and get user selection
async function getUserSelection(options) {
  const buttonsString = options.join('","')
  const result = await runJxa(`
    const app = Application.currentApplication();
    app.includeStandardAdditions = true;
    const buttons = ["${buttonsString}"];
    const chosenButton = app.chooseFromList(buttons, { withPrompt: "Select a mode:", defaultItems: buttons[0] });
    chosenButton[0] ? chosenButton[0] : null;
    return chosenButton[0]`)
  console.log('result', result)
  return result
}

// List of available modes/options
const modeOptions = ['Work Mode', 'Writing Mode', 'Email']
const emailModeApps = ['_https://www.gmail.com', 'Brave Browser']
const workModeApps = ['Notion', 'Spotify']

const askMode = async () => {
  const selectedMode = await getUserSelection(modeOptions)

  if (selectedMode) {
    if (selectedMode === 'Email') {
      for (const app of emailModeApps) {
        await openApp(app)
      }
    } else if (workModeApps) {
      for (const app of workModeApps) {
        await openApp(app)
      }
      console.log(`work mode`)
    }
    console.log(`Selected mode: ${selectedMode}`)
  } else {
    console.log('No mode selected.')
  }
}

async function openApp(app) {
  if (app.startsWith('_')) {
    let url = app.substring(1)
    console.log('url', url)
    return await runJxa(`
      const app = Application('Google Chrome');
      app.includeStandardAdditions = true;
      app.activate();
      app.openLocation("${url}");
    `)
  }
  await runJxa(`
    const app = Application("${app}");
    app.activate();
  `)
}

cron.schedule('12 17 * * 1-5', askMode)
