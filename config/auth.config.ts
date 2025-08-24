import Google from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";

export default {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
        }),
    ],
} as NextAuthConfig