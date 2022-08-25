import styles from "./NavBar.module.css";
import NavItem from "./NavItem";

function NavBar(props) {
  return (
    <li className={styles["list-wrap"]}>
      <NavItem
        content={props.content}
        title={props.title}
        isHovering={props.isHovering}
      />
    </li>
  );
}

export default NavBar;
