import styles from "./NavBarWrap.module.css";

function NavBarWrap(props) {
  return <ul className={styles.navWrap}>{props.children}</ul>;
}
export default NavBarWrap;
