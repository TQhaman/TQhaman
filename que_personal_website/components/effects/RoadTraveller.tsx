"use client";

import { useEffect, useRef } from "react";

import PixelAvatar from "./PixelAvatar";
import styles from "./ProjectRoad.module.css";

const ROAD_EDGE_INSET_PX = 20;
const CHECKPOINT_ACCENTS = [
  "var(--green)",
  "var(--cyan)",
  "var(--amber)",
  "var(--orange)",
] as const;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

export default function RoadTraveller() {
  const travellerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const traveller = travellerRef.current;
    const road = traveller?.closest<HTMLElement>("[data-project-road]");

    if (!traveller || !road) {
      return;
    }

    const checkpoints = Array.from(
      road.querySelectorAll<HTMLElement>("[data-road-checkpoint]"),
    );
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let animationFrameId: number | null = null;
    let activeCheckpointIndex = -1;
    let listenersAreActive = false;

    const setCheckpointAccent = (checkpointIndex: number) => {
      if (checkpointIndex === activeCheckpointIndex) {
        return;
      }

      const accent =
        CHECKPOINT_ACCENTS[checkpointIndex % CHECKPOINT_ACCENTS.length];

      traveller.style.setProperty("--avatar-accent", accent);
      traveller.dataset.activeCheckpoint = String(checkpointIndex);
      activeCheckpointIndex = checkpointIndex;
    };

    const moveToStart = () => {
      traveller.style.setProperty(
        "--travel-y",
        `${ROAD_EDGE_INSET_PX}px`,
      );
      setCheckpointAccent(0);
    };

    const updateTraveller = () => {
      animationFrameId = null;

      const roadRect = road.getBoundingClientRect();
      const travellerHeight = traveller.offsetHeight;
      const travelStart = ROAD_EDGE_INSET_PX;
      const travelEnd = Math.max(
        travelStart,
        road.offsetHeight - travellerHeight - ROAD_EDGE_INSET_PX,
      );
      const viewportCentre = window.innerHeight / 2;
      const progress = clamp(
        (viewportCentre - roadRect.top) / Math.max(roadRect.height, 1),
        0,
        1,
      );
      const travelY = travelStart + progress * (travelEnd - travelStart);

      traveller.style.setProperty("--travel-y", `${travelY}px`);

      if (checkpoints.length === 0) {
        return;
      }

      const travellerCentre = travelY + travellerHeight / 2;
      let nearestCheckpointIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      checkpoints.forEach((checkpoint, checkpointIndex) => {
        const checkpointRect = checkpoint.getBoundingClientRect();
        const checkpointCentre =
          checkpointRect.top - roadRect.top + checkpointRect.height / 2;
        const distance = Math.abs(checkpointCentre - travellerCentre);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestCheckpointIndex = checkpointIndex;
        }
      });

      setCheckpointAccent(nearestCheckpointIndex);
    };

    const scheduleUpdate = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateTraveller);
    };

    const addMovementListeners = () => {
      if (listenersAreActive) {
        return;
      }

      window.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate);
      window.addEventListener("orientationchange", scheduleUpdate);
      listenersAreActive = true;
    };

    const removeMovementListeners = () => {
      if (!listenersAreActive) {
        return;
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("orientationchange", scheduleUpdate);
      listenersAreActive = false;
    };

    const cancelScheduledUpdate = () => {
      if (animationFrameId === null) {
        return;
      }

      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    };

    const applyMotionPreference = () => {
      cancelScheduledUpdate();

      if (motionPreference.matches) {
        removeMovementListeners();
        moveToStart();
        return;
      }

      addMovementListeners();
      scheduleUpdate();
    };

    motionPreference.addEventListener("change", applyMotionPreference);
    applyMotionPreference();

    return () => {
      motionPreference.removeEventListener("change", applyMotionPreference);
      removeMovementListeners();
      cancelScheduledUpdate();
    };
  }, []);

  return (
    <div ref={travellerRef} className={styles.traveller} aria-hidden="true">
      <span className={styles.startLabel}>Start</span>
      <PixelAvatar />
    </div>
  );
}
