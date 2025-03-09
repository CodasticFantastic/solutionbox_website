"use client";

import { useEffect, useState } from "react";
import styles from "./modalOverlay.module.scss";
import Button from "../button/Button";

interface ModalOverlayProps {
  children: React.ReactNode;
  isOpen: boolean;
  onConfirm: () => void;
}

export default function ModalOverlay({
  children,
  isOpen,
  onConfirm,
}: ModalOverlayProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {isModalOpen ? (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>{children}</div>
            <div className={styles.modalFooter}>
              <Button variant="DANGER" onClick={() => setIsModalOpen(false)}>
                Anuluj
              </Button>
              <Button variant="ADD" onClick={handleConfirm}>
                Zatwierdź
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
