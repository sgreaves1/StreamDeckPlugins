import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { LaunchTrae } from "./actions/launch";
import { GoToDefinition } from "./actions/go-to-definition";
import { SearchFiles } from "./actions/search-files";
import { Cut } from "./actions/cut";
import { Copy } from "./actions/copy";
import { Paste } from "./actions/paste";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the actions.
streamDeck.actions.registerAction(new LaunchTrae());
streamDeck.actions.registerAction(new GoToDefinition());
streamDeck.actions.registerAction(new SearchFiles());
streamDeck.actions.registerAction(new Cut());
streamDeck.actions.registerAction(new Copy());
streamDeck.actions.registerAction(new Paste());

// Finally, connect to the Stream Deck.
streamDeck.connect();
