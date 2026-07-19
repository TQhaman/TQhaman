import styles from "./Origel.module.css";

export default function OrigelTerminal() {
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
              <div className={styles.terminalOutput}>
                <p className={styles.bashIdentity}>
                  <span className={styles.userHost}>qhamani@origel</span>
                  <span className={styles.bashName}>MINGW64</span>
                  <span className={styles.path}>~/portfolio</span>
                  <span className={styles.branch}>(main)</span>
                </p>

                <div className={styles.commandBlock}>
                  <p className={styles.commandLine}>
                    <span className={styles.promptSymbol}>$</span>
                    <span className={styles.commandText}>git status --short</span>
                  </p>
                  <p className={styles.statusLine}>
                    <span className={styles.modified}>M</span>
                    <span className={styles.output}>personal-portfolio</span>
                  </p>
                  <p className={styles.statusLine}>
                    <span className={styles.added}>A</span>
                    <span className={styles.output}>qws-digital</span>
                  </p>
                </div>

                <div className={styles.commandBlock}>
                  <p className={styles.commandLine}>
                    <span className={styles.promptSymbol}>$</span>
                    <span className={styles.commandText}>cat principles.txt</span>
                  </p>
                  <div className={styles.principles}>
                    <span>clarity</span>
                    <span>curiosity</span>
                    <span>reliability</span>
                  </div>
                </div>

                <p className={styles.modeLine}>
                  <span className={styles.secondary}>MODE</span>
                  <span className={styles.modeValue}>BUILD + LEARN</span>
                </p>

                <p className={styles.readyLine}>
                  <span className={styles.promptSymbol}>&gt;</span>
                  <span className={styles.output}>READY FOR NEXT </span>
                  <span className={styles.readyEnd}>
                    CHECKPOINT
                    <span className={styles.cursor} />
                  </span>
                </p>
              </div>
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
