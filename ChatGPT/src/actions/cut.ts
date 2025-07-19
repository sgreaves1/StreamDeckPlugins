import { action, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

@action({ UUID: "com.sam-greaves.gpt.cut" })
export class Cut extends SingletonAction {
    override async onKeyDown(ev: KeyDownEvent): Promise<void> {
        try {
            // AppleScript to simulate Cut
            const script = `
                tell application "System Events"
                    tell process "ChatGPT"
                        click menu item "Cut" of menu "Edit" of menu bar 1
                    end tell
                end tell
            `;
            await execAsync(`osascript -e '${script}'`);
        } catch (error) {
            console.error('Failed to simulate "Cut": ', error);
        }
    }
}