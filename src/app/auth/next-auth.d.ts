import { UserRole } from "@prisma/client";

declare module "next-auth" {
  interface User {
    id: string;
    username: string;
    email: string;
    role: UserRole;
  }

  interface Session {
    user: User;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    role: UserRole;
  }
}
