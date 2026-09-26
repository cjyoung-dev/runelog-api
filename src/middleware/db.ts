import {drizzle} from 'drizzle-orm/postgres-js'
import postgres from 'postgres';
import type {Context, Next} from 'hono';
import * as schema from '../db/schema'

export async function db(c: Context, next: Next) {
	const sql = postgres(c.env.HYPERDRIVE.connectionString, {
		max: 5,
		fetch_types: false,
	})

	const db = drizzle(sql, {schema});
	c.set('db', db)

	await next()
}
