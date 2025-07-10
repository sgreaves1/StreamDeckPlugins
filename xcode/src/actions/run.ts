import { action, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

@action({ UUID: "com.sam-greaves.xcode.run" })
export class Run extends SingletonAction {
    override async onKeyDown(ev: KeyDownEvent): Promise<void> {
        try {
            // AppleScript to simulate Run
            const script = `
                tell application "System Events"
                    tell process "Xcode"
                        click menu item "Run" of menu "Product" of menu bar 1
                    end tell
                end tell
            `;
            await execAsync(`osascript -e '${script}'`);
        } catch (error) {
            console.error('Failed to simulate "Run": ', error);
        }
    }
}