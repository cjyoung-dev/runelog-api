import { Hono } from 'hono'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import * as db from '../db/queries/activities';

const activities = new Hono<{Variables: {db: PostgresJsDatabase}}>()

//activities.get('/', async (c) => {})

activities.get('/', async (c) => {
	const playerList = await db.getAllActivities(c.get('db'));
	return c.json({playerList})
})

activities.get('/count', async (c) => {
	const count = await db.getActivityCount(c.get('db'))
	return c.json({count})
})

activities.get('/:playerId', async (c) => {
	const activityList = await db.getActivitiesByPlayerId(c.get('db'), Number(c.req.param('playerId')));
	return c.json({activityList})
})


export default activities
