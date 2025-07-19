import { action, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

@action({ UUID: "com.sam-greaves.xcode.paste" })
export class Paste extends SingletonAction {
    override async onKeyDown(ev: KeyDownEvent): Promise<void> {
        try {
            // AppleScript to simulate Paste
            const script = `
                tell application "System Events"
                    tell process "Xcode"
                        click menu item "Paste" of menu 1 of menu item "Paste" of menu "Edit" of menu bar 1
                    end tell
                end tell
            `;
            await execAsync(`osascript -e '${script}'`);
        } catch (error) {
            console.error('Failed to simulate "Paste": ', error);
        }
    }
}