
import styles from "./page.module.css";
import MainPage from "./components/startPage/startPage";



export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <MainPage/>
      </main>
      
    </div>
  );
}
