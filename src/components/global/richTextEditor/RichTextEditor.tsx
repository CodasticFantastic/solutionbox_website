"use client";

import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import styles from "./richTextEditor.module.scss";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { MdOutlineTextFields } from "react-icons/md";

// Quill Toolbar Config
const toolbarConfig = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  ["link", "blockquote", { script: "super" }],
  [{ list: "ordered" }, { list: "bullet" }],
  [
    { align: "" },
    { align: "center" },
    { align: "right" },
    { align: "justify" },
  ],
  [{ indent: "-1" }, { indent: "+1" }],
];

interface RichTextEditorProps {
  onChange: (value: string) => void;
  placeholder: string;
  label?: React.ReactNode;
  initialValue?: string;
  initialDisabled?: boolean;
  maxLength?: number;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  onChange,
  placeholder,
  label,
  initialValue,
  initialDisabled,
  maxLength,
}) => {
  const quillContainerRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const quillInstanceRef = useRef<any>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isMaxLengthReached, setIsMaxLengthReached] = useState(false);
  const [signsCount, setSignsCount] = useState(0);
  const [isQuillMounted, setIsQuillMounted] = useState(false);
  const [disabledValueRerendering, setDisabledValueRerendering] =
    useState(false);

  const unlockEditor = () => {
    quillInstanceRef.current?.enable();
    setIsLocked(false);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let QuillInstance: any;
    if (typeof window !== "undefined" && quillContainerRef.current) {
      import("quill").then((QuillModule) => {
        QuillInstance = QuillModule.default;

        // Prevent multiple Quill instances
        if (quillInstanceRef.current) {
          setIsQuillMounted(true);
          return;
        }

        // New Quill Instance
        quillInstanceRef.current = new QuillInstance(
          quillContainerRef.current,
          {
            debug: "error",
            modules: {
              toolbar: toolbarConfig,
            },
            placeholder: placeholder,
            theme: "snow",
          }
        );

        // Listen to text changes
        quillInstanceRef.current.on("text-change", () => {
          const currentQuillHTMLContent =
            quillInstanceRef.current?.root.innerHTML;
          onChange(currentQuillHTMLContent || "");

          const currentQuillContent = quillInstanceRef.current?.getText();
          const newCharCount = currentQuillContent?.length || 0;
          setSignsCount(newCharCount - 1);

          if (maxLength) {
            setIsMaxLengthReached(newCharCount - 1 >= maxLength);
          }
        });

        if (initialValue) {
          quillInstanceRef.current.clipboard.dangerouslyPasteHTML(initialValue);
        }

        if (initialDisabled) quillInstanceRef.current.disable();

        setIsQuillMounted(true);
      });
    }

    return () => {
      if (quillInstanceRef.current) {
        quillInstanceRef.current.off("text-change");
        quillInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!disabledValueRerendering && initialValue && isQuillMounted) {
      quillInstanceRef.current.clipboard.dangerouslyPasteHTML(initialValue);
      if (initialDisabled) {
        setIsLocked(initialDisabled);
      }
      setDisabledValueRerendering(true);
    }
  }, [initialValue, isQuillMounted]);

  return (
    <>
      <div className={styles.editorContainer}>
        <div className={styles.label}>{label}</div>
        {isLocked && (
          <strong
            onClick={unlockEditor}
            className={`${styles.editorAction} ${styles.textPrimary}`}
            style={{ fontSize: 14, cursor: "pointer" }}
          >
            <IoMdUnlock size={18} /> Odblokuj
          </strong>
        )}
        {!isLocked && !isMaxLengthReached && (
          <strong
            className={`${styles.editorAction} ${styles.textPrimary}`}
            style={{ fontSize: 14, userSelect: "none" }}
          >
            <MdOutlineTextFields size={18} /> Ilość znaków:{" "}
            {maxLength ? `${signsCount}/${maxLength}` : `${signsCount}`}
          </strong>
        )}
        {!isLocked && maxLength && isMaxLengthReached && (
          <strong
            className={`${styles.editorAction} ${styles.textDanger}`}
            style={{ fontSize: 14, userSelect: "none" }}
          >
            <IoMdLock size={18} /> Osiągnięto Limit znaków {signsCount}/
            {maxLength}
          </strong>
        )}
      </div>
      <div className={styles.editorWrapper}>
        <div ref={quillContainerRef} className={styles.quillContainer} />
        {isLocked && (
          <div
            className={styles.lockedOverlay}
            style={{
              zIndex: 999,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: 4,
            }}
          >
            <IoMdLock size={42} color="rgba(0, 0, 0, 0.4)" />
          </div>
        )}
      </div>
    </>
  );
};
