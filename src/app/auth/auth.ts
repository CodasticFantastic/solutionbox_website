import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prismaClient } from "@/prisma/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Nie podano emaila lub hasła");
        }

        const user = await prismaClient.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user) {
          throw new Error("Nie znaleziono użytkownika");
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!passwordMatch) {
          throw new Error("Błędne hasło");
        }

        return {
          id: String(user.id),
          username: user.username,
          email: user.email,
          role: user.role,
        } satisfies User;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }

      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/auth/solution-admin",
  },
});
