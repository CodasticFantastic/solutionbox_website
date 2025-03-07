"use client";

import Button from "@/components/website//core/button/Button";
import "@/scss/globals.scss";
import styles from "./styles.module.scss";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SolutionAdminLogin() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState<"INIT" | "LOADING" | "ERROR">(
    "INIT"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormState("LOADING");

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      });

      if (response?.error) {
        setFormState("ERROR");
        setErrorMessage("Niepoprawne dane logowania");
      } else {
        router.push("/admin");
      }
    } catch {
      setFormState("ERROR");
      setErrorMessage("Wystąpił błąd, poinformuj administratora.");
    }
  };

  return (
    <main className={styles.solutionAdminLogin}>
      <div className={`${styles.pageContainer} container`}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h1>SolutionBox Admin</h1>

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            required
          />
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            placeholder="Hasło"
            required
          />
          {formState === "ERROR" && (
            <p className={styles.error}>{errorMessage}</p>
          )}
          <Button
            variant="DARK"
            type="submit"
            disabled={formState === "LOADING"}
          >
            {formState === "LOADING" ? "Ładowanie..." : "Zaloguj się"}
          </Button>
        </form>
      </div>
    </main>
  );
}
