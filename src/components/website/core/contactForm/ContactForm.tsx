"use client";

import { useState } from "react";
import styles from "./contactForm.module.scss";
import Button from "../button/Button";

type FormStatus = "LOADING" | "SUCCESS" | "ERROR" | "ALL_FIELDS_ARE_REQUIRED";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agreement: false,
  });
  const [formStatus, setFormStatus] = useState<FormStatus>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("LOADING");

    try {
      const request = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const { message } = await request.json();

      if (message === "ALL_FIELDS_ARE_REQUIRED") {
        setFormStatus("ALL_FIELDS_ARE_REQUIRED");
      }

      if (message === "ERROR") {
        setFormStatus("ERROR");
      }

      if (message === "SUCCESS") {
        setFormStatus("SUCCESS");
      }
    } catch {
      setFormStatus("ERROR");
    }
  }

  return (
    <form
      id="formularz-kontaktowy"
      className={`${styles.contactForm} scrollTo`}
      onSubmit={handleSubmit}
    >
      <h2>Formularz kontaktowy</h2>
      <input
        className={styles.inputText}
        type="text"
        placeholder="Imię i nazwisko"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        className={styles.inputText}
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        className={styles.inputText}
        type="text"
        placeholder="Telefon"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <textarea
        className={styles.inputText}
        placeholder="Wiadomość"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        rows={6}
        required
      />
      <label className={styles.inputCheckbox}>
        <input
          type="checkbox"
          checked={formData.agreement}
          onChange={(e) =>
            setFormData({ ...formData, agreement: e.target.checked })
          }
          required
        />
        <span>Wyrażam zgodę na kontakt</span>
      </label>
      <Button
        type="submit"
        variant={formStatus === "SUCCESS" ? "DARK" : "ORANGE"}
        disabled={formStatus === "LOADING" || formStatus === "SUCCESS"}
      >
        {formStatus === "LOADING"
          ? "Wysyłanie wiadomości..."
          : formStatus === "SUCCESS"
          ? "Wiadomość wysłana"
          : "Wyslij"}
      </Button>
      {formStatus === "ALL_FIELDS_ARE_REQUIRED" && (
        <p className={styles.error}>
          Błąd: Wszystkie pola muszą być wypełnione.
        </p>
      )}
      {formStatus === "ERROR" && (
        <p className={styles.error}>
          Wystąpił problem podczas wysyłania wiadomości. Sprobuj ponownie.
        </p>
      )}
    </form>
  );
}
