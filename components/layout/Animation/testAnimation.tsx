// animations/testAnimation.ts
import gsap from "gsap";
import { RefObject } from "react";

/**
 * Animate a test element by scrolling its full text content.
 * On hover, if the text overflows its container, it will scroll continuously
 * from right to left. On mouse leave, the scrolling stops and the text resets.
 */
export const animateTest = (testRef: RefObject<HTMLDivElement | null>) => {
  if (!testRef.current) return;
  const testElement = testRef.current;

  // Calculate how much the text overflows its container.
  const scrollDistance = testElement.scrollWidth - testElement.clientWidth;
  // If there's no overflow, no scroll is needed.
  if (scrollDistance <= 0) return;

  // Create a GSAP timeline for the horizontal scroll effect.
  const tl = gsap.timeline({ paused: true, repeat: -1 });
  tl.to(testElement, {
    x: -scrollDistance,
    duration: 1,
    ease: "linear",
  });

  // Start scrolling on mouse enter.
  const handleMouseEnter = () => {
    tl.restart();
  };

  // Stop scrolling and reset position on mouse leave.
  const handleMouseLeave = () => {
    tl.pause();
    gsap.to(testElement, { x: 0, duration: 0.1, ease: "power2.out" });
  };

  testElement.addEventListener("mouseenter", handleMouseEnter);
  testElement.addEventListener("mouseleave", handleMouseLeave);

  // Return a cleanup function to remove event listeners and kill the timeline.
  return () => {
    testElement.removeEventListener("mouseenter", handleMouseEnter);
    testElement.removeEventListener("mouseleave", handleMouseLeave);
    tl.kill();
  };
};
