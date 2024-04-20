// Catatan Ngab! : Route Handlers are only available inside the app directory. 
// They are the  equivalent of API Routes inside the pages directory meaning you do not need to use API Routes and Route Handlers together.
// export const dynamic = 'force-dynamic' // defaults to auto


// export async function GET(request: Request) {}

const GET = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
    const parsedData = await response.json();
    return Response.json (parsedData);
}
export {GET}