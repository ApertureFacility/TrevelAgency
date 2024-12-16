"use client";

import { BrowserRouter } from "react-router-dom";
import styles from "./page.module.css";
import MainPage from "./components/MainPage/MainPage";

export default function Home() {
  return (
    <BrowserRouter>
      <div className={styles.page}>
        <main className={styles.main}>
          <MainPage />
        </main>
      </div>
    </BrowserRouter>
  );
}
