import { action, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

@action({ UUID: "com.sam-greaves.trae.launch" })
export class LaunchTrae extends SingletonAction {
    override async onKeyDown(ev: KeyDownEvent): Promise<void> {
        try {
            // AppleScript to activate or launch Trae
            const script = `
                tell application "System Events"
                    if exists (process "Trae") then
                        set frontmost of process "Trae" to true
                    else
                        tell application "Trae" to activate
                    end if
                end tell
            `;
            await execAsync(`osascript -e '${script}'`);
        } catch (error) {
            console.error('Failed to launch/focus Trae:', error);
        }
    }
}