import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";

export const openDb = SQLite.openDatabaseSync("db.db");

export const db = drizzle(openDb);
