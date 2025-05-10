import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(req, context) {
    const { params } = await context;
    const data = await req.json();
    const user = await prisma.user.update({
        where: { id: Number(params.id) },
        data,
    });
    return Response.json(user);
}

export async function DELETE(_, context) {
    const { params } = await context;
    await prisma.user.delete({
        where: { id: Number(params.id) },
    });
    return new Response(null, { status: 204 });
}
