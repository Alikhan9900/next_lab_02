// app/api/db-test/route.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
    const users = await prisma.user.findMany();
    console.log('DB TEST: found users count =', users.length);
    return new Response(JSON.stringify({ count: users.length }));
}
