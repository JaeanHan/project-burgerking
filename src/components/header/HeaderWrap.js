import Header from "./Header";
import styles from "./HeaderWrap.module.css";

function HeaderWrap() {
  return (
    <div className={styles.head_menuWrap}>
      <Header />
    </div>
  );
}

export default HeaderWrap;
