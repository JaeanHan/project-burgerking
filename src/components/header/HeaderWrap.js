import styles from "./HeaderWrap.module.css";

function HeaderWrap(props) {
  return (
    <div
      className={`${styles.headerWrap} ${props.isHovering ? styles.yeah : ""}`}
    >
      {props.children}
    </div>
  );
}

export default HeaderWrap;
