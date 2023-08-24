import { openDialog } from './openDialog.js'
import { populateWindowWithTabs } from './getWindowContext.js'

const main = async () => {
  return
  // return await run(() => )
}

const runScript = async () => {
  const selection = await openDialog()
  if (selection) {
    console.log('selection', selection)
    const tabs = await populateWindowWithTabs(selection.links)
    console.log('tabs', tabs)
  }
}
// set the run script as a cron schedule
// cron.schedule('10 9 * * 1-7', runScript)

// test
runScript()

// export async function runMorningAutomation(appsToOpen) {
//   for (const app of appsToOpen) {
//     try {
//       const username = await currentUserName();
//       console.log("username", username);
//       await run(`
//         const app = Application('${app}');
//         app.activate();
//       `);
//       // await openApp(app);
//       // getCurrentDesktopId().then((desktopId) => {
//       //   console.log(`Current Desktop ID: ${desktopId}`);
//       // });
//     } catch (error) {
//       console.error(`Error opening ${app}: ${error}`);
//     }
//   }
// }

// const currentUserName = () => {
//   return run(() => {
//     const sys = Application("System Events");
//     return sys.currentUser().name();
//   });
// };

// async function getCurrentDesktopId() {
//   // return await run(() => {
//   //   const systemEvents = Application("System Events");
//   //   // systemEvents.currentUser();
//   //   console.log("systemEvents.currentUser()", systemEvents.currentUser());
//   // });
//   const currentDesktopId = await run(`
//     const systemEvents = Application('System Events');
//     const currentDesktop = systemEvents.currentUser().currentDesktop();
//     return currentDesktop.id();
//   `);
//   // console.log("currentDesktopId", currentDesktopId);
//   return currentDesktopId;
// }

// async function openApp(app) {
//   return await run((app) => {
//     console.log("app", app);
//     const appToOpen = Application(app);
//     appToOpen.activate();
//     // console.log("desktopId", desktopId);
//     // console.log("appToOpen.windows[0]", appToOpen.windows[0]);
//     // appToOpen.windows[0].visible = true;
//   }, app);
// }

// const appsToOpen = ["Safari", "Spotify", "zoom.us"];

// runMorningAutomation(appsToOpen).catch((error) => {
//   console.error("An error occurred:", error);
// });
