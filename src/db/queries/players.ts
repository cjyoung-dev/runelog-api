import type {PostgresJsDatabase} from 'drizzle-orm/postgres-js';
import {playersTable} from '../schema';

//export async function func(db: PostgresJsDatabase) {}

export async function getPlayerCount(db: PostgresJsDatabase) {
	return await db.$count(playersTable);
}

export async function getAllPlayers(db: PostgresJsDatabase) {
	return await db.select().from(playersTable);
}
