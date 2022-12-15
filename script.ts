import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany()
  const users = await prisma.user.createMany({
    data: [
      {
        name: 'Kyle',
        email: 'kyle@test.com',
        age: 27
      },
      {
        name: 'Sally',
        email: 'sally@test.com',
        age: 27
      },
      {
        name: 'Mary',
        email: 'mary@test.com',
        age: 27
      },
    ]
  })

  console.log(users)
}

main()
  .catch(e => {
    console.log(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })