// deno run --allow-net demos1/server.js

const hostname = "localhost";
const port = 8080;
const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);
for await (const conn of listener) {
    Deno.copy(conn, conn);
}