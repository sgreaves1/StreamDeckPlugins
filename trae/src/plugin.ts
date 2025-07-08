import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { LaunchTrae } from "./actions/launch-trae";
import { GoToDefinition } from "./actions/go-to-definition";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the actions.
streamDeck.actions.registerAction(new LaunchTrae());
streamDeck.actions.registerAction(new GoToDefinition());

// Finally, connect to the Stream Deck.
streamDeck.connect();
