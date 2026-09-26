import type {PostgresJsDatabase} from 'drizzle-orm/postgres-js';
import {activitiesTable} from '../schema';
import {eq} from 'drizzle-orm';

//export async function func(db: PostgresJsDatabase) {}

export async function getActivityCount(db: PostgresJsDatabase) {
	return await db.$count(activitiesTable);
}

export async function getAllActivities(db: PostgresJsDatabase) {
	return await db.select().from(activitiesTable);
}

export async function getActivitiesByPlayerId(db: PostgresJsDatabase, playerId: number) {
	return await db.select().from(activitiesTable).where(eq(activitiesTable.playerId, playerId));
}
