// export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request): Promise<Response> {
    return new Response("aiueo", { status: 200, headers: { "Content-Type": "text/plain" } });
}
