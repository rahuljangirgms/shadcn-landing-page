"use client";

import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import Magnetic from "../Magnetic";

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function MagneticButton({
  children,
  backgroundColor = "hsl(var(--primary))",
  ...attributes
}: MagneticButtonProps) {
  const circle = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (circle.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .addLabel("enter")
        .to(
          circle.current,
          {
            top: "-25%",
            width: "150%",
            duration: 0.4,
            ease: "power3.in",
          },
          "enter"
        )
        .addLabel("exit")
        .to(
          circle.current,
          {
            top: "-150%",
            width: "125%",
            duration: 0.25,
            ease: "power3.out",
          },
          "exit"
        );
    }
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
    // Animate smoothly from the "enter" label to the "exit" label.
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      // Play the timeline to return the circle to its original state.
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
}
