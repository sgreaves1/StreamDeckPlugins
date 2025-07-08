import { action, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

@action({ UUID: "com.sam-greaves.trae.go-to-definition" })
export class GoToDefinition extends SingletonAction {
    override async onKeyDown(ev: KeyDownEvent): Promise<void> {
        try {
            // AppleScript to simulate go to definition
            const script = `
                tell application "System Events"
                    tell process "Trae"
                        click menu item "Go to Definition" of menu "Go" of menu bar 1
                    end tell
                end tell
            `;
            await execAsync(`osascript -e '${script}'`);
        } catch (error) {
            console.error('Failed to simulate "Go to Definition": ', error);
        }
    }
}