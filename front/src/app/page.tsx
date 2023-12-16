import Image from "next/image";
import styles from "./page.module.css";

import TestPage from "@/components/testPage";
import UserProvider from "@/context/UserContext";

export default function Home() {
  return (
    <UserProvider>
      <main className={styles.main}>
        <TestPage></TestPage>
      </main>
    </UserProvider>
  );
}
