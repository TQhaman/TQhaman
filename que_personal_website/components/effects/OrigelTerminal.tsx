"use client";

import { useEffect, useState } from "react";
import styles from "./Origel.module.css";

const BOOT_DELAY_MS = 5000;

export default function OrigelTerminal() {
  const [hasBooted, setHasBooted] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setHasBooted(true);
    }, BOOT_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.terminalStage} data-booted={hasBooted}>
      <div className={styles.bootOutput}>
        <p className={styles.commandLine}>
          <span className={styles.promptSymbol}>$</span>
          <span className={styles.commandText}>./start-portfolio</span>
        </p>
        <p className={styles.bootLine}>loading workspace...</p>
        <p className={styles.bootLine}>checking branch...</p>
        <p className={styles.bootReady}>terminal ready</p>
      </div>

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
  );
}
