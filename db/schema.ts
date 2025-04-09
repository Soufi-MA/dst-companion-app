import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const characters = sqliteTable("characters", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  health: integer("health"),
  hunger: integer("hunger"),
  sanity: integer("sanity"),
  description: text("description"),
  perk: text("perk"),
});
export type Character = typeof characters.$inferSelect;

export const metadata = sqliteTable("metadata", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
});
