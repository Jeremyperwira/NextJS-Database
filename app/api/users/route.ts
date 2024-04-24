// Catatan Ngab! : Route Handlers are only available inside the app directory. 
// They are the  equivalent of API Routes inside the pages directory meaning you do not need to use API Routes and Route Handlers together.
// export const dynamic = 'force-dynamic' // defaults to auto


// export async function GET(request: Request) {}

import { auth } from "@clerk/nextjs/server";


/*  */
/* const GET = async () => {
  const { getToken } = auth();
   const template = 'test';
   const token = await getToken({ template })
   return Response.json({ token })
}
export {GET} */