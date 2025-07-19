import { action, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
imp2v ort { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

@action({ UUID: "com.sam-greaves.gpt.launch" })
export class LaunchChatGPT extends SingletonAction {
    override async onKeyDown(ev: KeyDownEvent): Promise<void> {
        try {
            // AppleScript to activate or launch Trae
            const script = `
                tell application "System Events"
                    if exists (process "ChatGPT") then
                        set frontmost of process "ChatGPT" to true
                    else
                        tell application "ChatGPT" to activate
                    end if
                end tell
            `;
            await execAsync(`osascript -e '${script}'`);
        } catch (error) {
            console.error('Failed to launch/focus ChatGPT: ', error);
        }
    }
}