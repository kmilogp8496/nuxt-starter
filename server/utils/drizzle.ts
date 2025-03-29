import { drizzle } from 'drizzle-orm/d1'
import { users } from '../database/schemas/users'
import { organizations } from '../database/schemas/organizations'

export const starterTables = {
  users,
  organizations,
}

export function useStarterDb() {
  return drizzle(hubDatabase(), { schema: starterTables })
}
