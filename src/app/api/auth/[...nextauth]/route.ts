import NextAuth from 'next-auth';
import { authOptions } from "@/lib/serverAuth/authOptions";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }