// animations/buttonAnimations.ts
import gsap from "gsap";
import { RefObject } from "react";

export const animateButton = (buttonRef: RefObject<HTMLDivElement | null>) => {
  if (!buttonRef.current) return;

  const btn = buttonRef.current;
  // Select inner elements from the static HTML structure:
  const originalContent = btn.querySelector(".btn-content.original");
  const duplicateContent = btn.querySelector(".btn-content.duplicate");
  const borderBox = btn.querySelector(".border-box");

  // Ensure the elements exist before proceeding.
  if (!originalContent || !duplicateContent || !borderBox) return;

  // Set initial positions
  gsap.set(originalContent, { x: "5%" });
  gsap.set(duplicateContent, { x: "0%" });
  gsap.set(borderBox, { opacity: 1 });

  // Create a GSAP timeline (paused by default) with labels.
  const tl = gsap.timeline({ paused: true });

  tl.addLabel("enter")
    .to(originalContent, { x: "0%", duration: 0.5, ease: "power2.out" }, "enter")
    .to(duplicateContent, { x: "105%", duration: 0.5, ease: "power2.out" }, "enter")
    .to(borderBox, { opacity: 0, duration: 0.5, ease: "power2.out" }, "enter")
    .addLabel("exit")
    .to(originalContent, { x: "5%", duration: 0.4, ease: "power2.out" }, "exit")
    .to(duplicateContent, { x: "0%", duration: 0.4, ease: "power2.out" }, "exit")
    .to(borderBox, { opacity: 1, duration: 0.4, ease: "power2.out" }, "exit");

  // Timeout for delaying the reverse animation on mouse leave.
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    // Animate smoothly from the "enter" label to the "exit" label.
    tl.tweenFromTo("enter", "exit");
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      // Continue the timeline to return to the original state smoothly.
      tl.play();
    }, 300);
  };

  // Optional click effect: scale down on mousedown, then scale back up on mouseup.
  const handleMouseDown = () => {
    gsap.to(btn, { scale: 0.95, duration: 0.08, ease: "power2.out" });
  };

  const handleMouseUp = () => {
    gsap.to(btn, { scale: 1, duration: 0.15, ease: "power2.out" });
  };

  // Attach event listeners.
  btn.addEventListener("mouseenter", handleMouseEnter);
  btn.addEventListener("mouseleave", handleMouseLeave);
  btn.addEventListener("mousedown", handleMouseDown);
  btn.addEventListener("mouseup", handleMouseUp);

  // Return a cleanup function to remove event listeners.
  return () => {
    btn.removeEventListener("mouseenter", handleMouseEnter);
    btn.removeEventListener("mouseleave", handleMouseLeave);
    btn.removeEventListener("mousedown", handleMouseDown);
    btn.removeEventListener("mouseup", handleMouseUp);
    if (timeoutId) clearTimeout(timeoutId);
  };
};
