import styles from "./NavItem.module.css";
import NavSubItem from "./NavSubItem";

function NavItem(props) {
  return (
    <div className={styles["item-wrap"]}>
      <button type="button" className={styles.item__button}>
        <span className={styles.item__span}>{props.title}</span>
      </button>
      <ul
        className={`${styles.submenu} ${props.isHovering ? styles.yeah : ""}`}
      >
        {props.content.map((item) => (
          <NavSubItem item={item} key={item} />
        ))}
      </ul>
    </div>
  );
}

export default NavItem;
