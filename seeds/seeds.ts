import { faker } from '@faker-js/faker'
import type { InsertOrganization } from '~~/server/database/schemas/organizations'
import type { InsertUser } from '~~/server/database/schemas/users'

export const executionOrder = [
  'organizations',
  'users',
] as const

export const organizations: InsertOrganization[] = [
  {
    id: 1,
    name: faker.company.name(),
    description: faker.lorem.sentence(),
  },
  {
    id: 2,
    name: faker.company.name(),
    description: faker.lorem.sentence(),
    isActive: false,
  },
]

export const users: InsertUser[] = [
  {
    id: 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    organizationId: 1,
    avatar: faker.image.avatar(),
  },
  {
    id: 2,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    organizationId: 1,
    avatar: faker.image.avatar(),
  },
]
