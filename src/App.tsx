import styles from "./App.module.css";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";

export const App = () => {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content} />
      <Footer />
    </div>
  );
};
