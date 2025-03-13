"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion, Variants } from "framer-motion";
import styles from "./style.module.scss";

export interface DynamicSliderProps {
    /**
     * The text to display in the slider.
     */
    text?: string;
    /**
     * The horizontal speed multiplier (default: 0.1).
     */
    speed?: number;
    /**
     * GSAP ScrollTrigger scrub value (default: 0.25).
     */
    scrollScrub?: number;
    /**
     * Framer Motion variants for the container animation.
     */
    framerMotionVariants?: Variants;
    /**
     * If true, the slider will pause scrolling when hovered (default: true).
     */
    pauseOnHover?: boolean;
    /**
     * Optional additional className for the main container.
     */
    className?: string;
}

// Define your default variants with proper typing.
const defaultVariants: Variants = {
    initial: { y: 300 },
    enter: {
        y: 0,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
    },
};

export default function DynamicSlider({
    text = "Freelance Developer -",
    speed = 0.1,
    scrollScrub = 0.25,
    framerMotionVariants = defaultVariants,
    pauseOnHover = true,
    className = "",
}: DynamicSliderProps) {
    // Refs for the two text elements and the slider container
    const firstText = useRef<HTMLParagraphElement>(null);
    const secondText = useRef<HTMLParagraphElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    // Use refs to hold the current horizontal offset, scroll direction, and hover state
    const xPercent = useRef(0);
    const direction = useRef(-1);
    const isHovered = useRef(false);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (slider.current) {
            gsap.to(slider.current, {
                scrollTrigger: {
                    trigger: document.documentElement,
                    scrub: scrollScrub,
                    start: 0,
                    end: window.innerHeight,
                    onUpdate: (e) => {
                        // Update direction based on scroll (inverted)
                        direction.current = e.direction * -1;
                    },
                },
                // This tween is not used to drive the loop,
                // but it can be used for additional scroll-based effects.
                x: "-500px",
            });
        }

        let rafId: number;

        const animate = () => {
            if (!pauseOnHover || !isHovered.current) {
                // Reset the offset to create a seamless loop
                if (xPercent.current < -100) {
                    xPercent.current = 0;
                } else if (xPercent.current > 0) {
                    xPercent.current = -100;
                }
                if (firstText.current) {
                    gsap.set(firstText.current, { xPercent: xPercent.current });
                }
                if (secondText.current) {
                    gsap.set(secondText.current, { xPercent: xPercent.current });
                }
                // Increment the offset by the speed multiplied by the scroll direction
                xPercent.current += speed * direction.current;
            }
            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [speed, scrollScrub, pauseOnHover]);

    const handleMouseEnter = () => {
        if (pauseOnHover) isHovered.current = true;
    };

    const handleMouseLeave = () => {
        if (pauseOnHover) isHovered.current = false;
    };

    return (
        <motion.main
            variants={framerMotionVariants}
            initial="initial"
            animate="enter"
            className={`${styles.landing} ${className}`}
        >
            <div
                className={styles.sliderContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText}>{text}</p>
                    <p ref={secondText}>{text}</p>
                </div>
            </div>
        </motion.main>
    );
}
