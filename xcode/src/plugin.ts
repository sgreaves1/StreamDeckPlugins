import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { LaunchXcode } from "./actions/launch";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the increment action.
streamDeck.actions.registerAction(new LaunchXcode());

// Finally, connect to the Stream Deck.
streamDeck.connect();
