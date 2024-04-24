import { auth } from "@clerk/nextjs/server";


/*  */
const GET = async () => {
  const { getToken } = auth();
   const template = 'test';
   const token = await getToken({ template })
   return Response.json({ token })
}
export {GET}