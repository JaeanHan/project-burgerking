import MainSlide from "../slide/MainSlide.js";
import styles from "./Content.module.css";

function Content() {
  return (
    <div className={styles.mainWrap}>
      <MainSlide />
    </div>
  );
}

export default Content;
