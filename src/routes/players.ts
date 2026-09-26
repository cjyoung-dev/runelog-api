import { Hono } from 'hono'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import * as db from '../db/queries/players';

const players = new Hono<{Variables: {db: PostgresJsDatabase}}>()

//players.get('/', async (c) => {})

players.get('/', async (c) => {
	const playerList = await db.getAllPlayers(c.get('db'));
	return c.json({playerList})
})

players.get('/count', async (c) => {
	const count = await db.getPlayerCount(c.get('db'))
	return c.json({count})
})

export default players
