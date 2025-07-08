import { action, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

@action({ UUID: "com.sam-greaves.xcode.launch" })
export class LaunchXcode extends SingletonAction {
    override async onKeyDown(ev: KeyDownEvent): Promise<void> {
        try {
            // AppleScript to activate or launch Trae
            const script = `
                tell application "System Events"
                    if exists (process "Xcode") then
                        set frontmost of process "Xcode" to true
                    else
                        tell application "Xcode" to activate
                    end if
                end tell
            `;
            await execAsync(`osascript -e '${script}'`);
        } catch (error) {
            console.error('Failed to launch/focus Xcode: ', error);
        }
    }
}