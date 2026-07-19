import styles from "./PixelAvatar.module.css";

export default function PixelAvatar() {
  return (
    <div className={styles.avatar} aria-hidden="true">
      <span className={styles.hairBack} />
      <span className={styles.earLeft} />
      <span className={styles.earRight} />
      <span className={styles.face} />
      <span className={styles.hairTop} />
      <span className={styles.hairLine} />
      <span className={styles.browLeft} />
      <span className={styles.browRight} />
      <span className={styles.eyeLeft} />
      <span className={styles.eyeRight} />
      <span className={styles.nose} />
      <span className={styles.mouth} />
      <span className={styles.neck} />
      <span className={styles.shoulderLeft} />
      <span className={styles.shoulderRight} />
      <span className={styles.shirt} />
      <span className={styles.collar} />
      <span className={styles.accent} />
      <span className={styles.base} />
    </div>
  );
}
