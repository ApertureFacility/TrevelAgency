
"use client"

import styles from "./page.module.css";
import MainPage from "./components/startPage/startPage";
import { BrowserRouter } from "react-router-dom";


export default function Home() {
  return (
    <BrowserRouter>
    <div className={styles.page}>
      <main className={styles.main}>
      <MainPage/>
      </main>
    </div>
    </BrowserRouter>
  );
}
