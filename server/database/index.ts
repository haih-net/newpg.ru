import '../env'
import knex, { type Knex } from 'knex'

export function createDatabase(): Knex | null {
  const DATABASE_URL = process.env.DATABASE_URL

  if (!DATABASE_URL) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('process.env.DATABASE_URL is empty')
    }

    return null
  }

  return knex({
    client: 'pg',
    connection: DATABASE_URL,
    pool: { min: 0, max: 10 },
    acquireConnectionTimeout: 10000,
  })
}

export const db: Knex | null = createDatabase()
