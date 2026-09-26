/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import {Hono} from 'hono'
import {db} from './middleware/db';
import {PostgresJsDatabase} from 'drizzle-orm/postgres-js';

import players from './routes/players';
import activities from './routes/activities';

const app = new Hono<{Variables: {db: PostgresJsDatabase}}>();

app.use('*', db)

app.get('/health', (c) => {
	return c.json({status: 'ok'})
})

app.route('/players', players)
app.route('/activities', activities)

export default app
