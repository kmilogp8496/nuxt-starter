import { starterTables } from '../utils/drizzle'
import * as seeds from '~~/seeds/seeds'

export default defineTask({
  meta: {
    name: 'db:seed:starter',
    description: 'Run database seed task',
  },
  async run() {
    console.log('Running DB seed task...')

    for (const table of seeds.executionOrder) {
      console.log('Trying to seed table: ', table)
      if (!(table in seeds) || !(table in starterTables)) {
        console.error(`Table ${table} not found in seeds or tables`)
        return { result: 'error' }
      }

      const seed = seeds[table]

      console.log(`Seeding table ${table} with ${seed.length} rows...`)
      await useStarterDb().insert(starterTables[table]).values(seed)
    }

    return { result: 'success' }
  },
})
