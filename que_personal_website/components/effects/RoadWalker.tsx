import styles from "./RoadWalker.module.css";

export default function RoadWalker() {
  return (
    <div className={styles.walker}>
      <span className={styles.shadow} />
      <span className={styles.body}>
        <span className={styles.armLeft} />
        <span className={styles.armRight} />
        <span className={styles.legLeft} />
        <span className={styles.legRight} />
        <span className={styles.hairBack} />
        <span className={styles.earLeft} />
        <span className={styles.earRight} />
        <span className={styles.face} />
        <span className={styles.hairTop} />
        <span className={styles.eyeLeft} />
        <span className={styles.eyeRight} />
        <span className={styles.neck} />
        <span className={styles.torso} />
        <span className={styles.accent} />
      </span>
    </div>
  );
}
