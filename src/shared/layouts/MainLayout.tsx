import Header from "@/widgets/LayoutHeader/Header";
import Footer from "@/widgets/LayoutFooter/Footer";

import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
