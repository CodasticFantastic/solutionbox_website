"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ProtectedAdminWrapperProps {
  children: React.ReactNode;
  session: Session | null;
}

export default function ProtectedAdminWrapper({
  children,
  session,
}: ProtectedAdminWrapperProps) {
  const router = useRouter();
  if (!session) {
    router.push("/");
    return null;
  }

  return <SessionProvider>{children}</SessionProvider>;
}
