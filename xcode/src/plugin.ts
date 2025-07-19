import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { LaunchXcode } from "./actions/launch";
import { Cut } from "./actions/cut";
import { Copy } from "./actions/copy";
import { Run } from "./actions/run";
import { Stop } from "./actions/stop";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the increment action.
streamDeck.actions.registerAction(new LaunchXcode());
streamDeck.actions.registerAction(new Cut());
streamDeck.actions.registerAction(new Copy());
streamDeck.actions.registerAction(new Run());
streamDeck.actions.registerAction(new Stop());

// Finally, connect to the Stream Deck.
streamDeck.connect();
