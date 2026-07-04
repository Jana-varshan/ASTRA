import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <main className={styles.layout}>{children}</main>;
};

export default Layout;