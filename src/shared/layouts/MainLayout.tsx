import Header from "@/widgets/LayoutHeader/Header";
import Footer from "@/widgets/LayoutFooter/Footer";

import styles from "./MainLayout.module.css";
import type { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
