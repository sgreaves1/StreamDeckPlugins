import { action, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

@action({ UUID: "com.sam-greaves.trae.undo" })
export class Undo extends SingletonAction {
    override async onKeyDown(ev: KeyDownEvent): Promise<void> {
        try {
            // AppleScript to simulate Undo
            const script = `
                tell application "System Events"
                    tell process "Trae"
                        click menu item "Undo" of menu "Edit" of menu bar 1
                    end tell
                end tell
            `;
            await execAsync(`osascript -e '${script}'`);
        } catch (error) {
            console.error('Failed to simulate "Undo": ', error);
        }
    }
}