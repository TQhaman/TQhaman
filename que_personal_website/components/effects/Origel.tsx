import OrigelTerminal from "./OrigelTerminal";
import styles from "./Origel.module.css";

export default function Origel() {
  return (
    <figure className={styles.origel}>
      <div className={styles.antenna} aria-hidden="true">
        <span className={styles.antennaLeft} />
        <span className={styles.antennaRight} />
      </div>

      <div className={styles.shell} aria-hidden="true">
        <div className={styles.topBar}>
          <span className={styles.brand}>Origel</span>
          <span className={styles.model}>v21.3</span>
        </div>

        <div className={styles.face}>
          <div className={styles.bezel}>
            <div className={styles.screen}>
              <OrigelTerminal />
            </div>
          </div>

          <div className={styles.controlPanel}>
            <div className={styles.statusLight}>
              <span />
              <strong>READY</strong>
            </div>

            <div className={styles.dials}>
              <span className={styles.largeDial} />
              <span className={styles.smallDial} />
            </div>

            <div className={styles.speaker}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className={styles.lowerTrim}>
          <span>DEV CLI</span>
          <span className={styles.powerMark} />
        </div>
      </div>

      <div className={styles.feet} aria-hidden="true">
        <span />
        <span />
      </div>

      <figcaption className="sr-only">
        Origel Git terminal showing the personal portfolio as modified, QWS
        Digital as added, and the principles clarity, curiosity and
        reliability. Build and learn mode is ready for the next checkpoint.
      </figcaption>
    </figure>
  );
}
