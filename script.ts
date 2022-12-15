import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany()
  const user = await prisma.user.create({
    data: {
      name: 'Kyle',
      email: 'kyle@test.com',
      age: 27,
      UserPreference: {
        create: {
          emailUpdate: true
        },
      },
    },
    include: {
      UserPreference: true,
    }
  })

  console.log(user)
}

main()
  .catch(e => {
    console.log(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })