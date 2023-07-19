import { exec } from "child_process";

function enableDoNotDisturb() {
  const applescriptCode = `
    tell application "System Events"
      tell application process "SystemUIServer"
        tell (first menu bar item whose description is "Notification Center") of menu bar 2
          click
          click menu item "Do Not Disturb" of menu 1
        end tell
      end tell
    end tell
  `;

  exec(`osascript -e '${applescriptCode}'`, (error, stdout, stderr) => {
    if (error) {
      console.error("Error occurred:", error.message);
    } else {
      console.log("Do Not Disturb enabled successfully.");
    }
  });
}

enableDoNotDisturb();
