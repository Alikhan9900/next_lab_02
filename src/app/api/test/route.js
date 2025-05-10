export async function GET() {
    console.log('SERVER: SECRET_KEY =', process.env.SECRET_KEY);
    console.log('SERVER: API_KEY =', process.env.API_KEY);
    console.log('SERVER: NEXT_PUBLIC_SITE_NAME =', process.env.NEXT_PUBLIC_SITE_NAME);

    return Response.json({ ok: true });
}

