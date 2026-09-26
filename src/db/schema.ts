import { integer, pgTable, timestamp, text, unique } from "drizzle-orm/pg-core";

export const activitiesTable = pgTable("activities", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	date: timestamp().notNull(),
	details: text().notNull(),
	text: text().notNull(),
	playerId: integer("player_id").notNull().references(() => playersTable.id, {onDelete: "cascade"}),
}, (table) => [
	unique().on(table.date, table.playerId, table.text)
]);

export const playersTable = pgTable("players", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: text().notNull().unique(),
});
