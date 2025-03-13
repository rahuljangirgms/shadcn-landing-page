"use client";

import React, { useEffect, useRef, FC } from "react";
import { animateButton } from "@/components/layout/Animation/buttonAnimations";

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  /**
   * Variant names should match the CSS class names defined in your custom CSS.
   * For example: "primary", "outline", "ghost", "dark", "light", "circle", etc.
   */
  variant?: string;
  /**
   * Size classes defined in your CSS, e.g.: "sm", "md", "lg", "xl".
   */
  size?: string;
  /**
   * Extra classes if needed.
   */
  extraClassName?: string;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  size = "md",
  extraClassName = "",
}) => {
  // Use a ref on the outer container (which holds the static structure)
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cleanup = animateButton(buttonRef);
    return cleanup;
  }, []);

  // Construct a class string that matches your CSS.
  // For example: "btn primary md btn-hover"
  const classes = `btn ${variant} ${size} btn-hover ${extraClassName}`;

  return (
    <div ref={buttonRef} className={classes} onClick={onClick}>
      <div className="btn-click" data-prelaunch-modal="toggle">
        <div className="btn-content original">
          <div className="btn-fill"></div>
          <span>{text}</span>
        </div>
        <div className="btn-content duplicate">
          <div className="btn-fill"></div>
          <span>{text}</span>
        </div>
        <div className="border-box"></div>
      </div>
    </div>
  );
};

export default AnimatedButton;
