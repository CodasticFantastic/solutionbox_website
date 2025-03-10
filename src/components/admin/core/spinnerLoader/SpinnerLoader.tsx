"use client";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./spinnerLoader.module.scss";

interface SpinnerLoaderProps {
  isLoading: boolean;
}

export default function SpinnerLoader({ isLoading }: SpinnerLoaderProps) {
  return isLoading ? (
    <div className={styles.spinnerLoader}>
      <ClipLoader
        color="#f29104"
        loading={isLoading}
        size={45}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p>Ładowanie danych...</p>
    </div>
  ) : null;
}
