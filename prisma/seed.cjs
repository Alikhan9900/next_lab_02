// prisma/
//seed.cjs
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function main() {
    // Створимо пару юзерів
    const alice = await prisma.user.upsert({
        where: { email: 'alice@example.com' },
        update: {},
        create: { email: 'alice@example.com', name: 'Alice' },
    });
    const bob = await prisma.user.upsert({
        where: { email: 'bob@example.com' },
        update: {},
        create: { email: 'bob@example.com', name: 'Bob' },
    });

    // Додамо пости
    await prisma.post.create({
        data: {
            title: 'Hello from Alice',
            content: 'This is seeded content.',
            authorId: alice.id,
        },
    });
    await prisma.post.create({
        data: {
            title: 'Bob’s first post',
            published: true,
            authorId: bob.id,
        },
    });

    console.log('✅ Seeded database with initial users and posts');
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })