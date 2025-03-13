"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export interface AnimatedButtonProps
    extends React.ComponentPropsWithoutRef<typeof Button> {
    text?: string;
    mountAnimation?: gsap.TweenVars;
    clickAnimation?: gsap.TweenVars;
    hoverAnimation?: gsap.TweenVars;
    hoverLeaveAnimation?: gsap.TweenVars;
    // Additional scramble effect options:
    scrambleDuration?: number;
    scrambleCharsEnter?: string;
    scrambleCharsLeave?: string;
}

const AnimatedButton = ({
    text = "Sign up here",
    mountAnimation,
    clickAnimation,
    hoverAnimation,
    hoverLeaveAnimation,
    scrambleDuration = 0.8,
    scrambleCharsEnter = "0123456789!@#$%^&*()",
    scrambleCharsLeave = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    ...buttonProps
}: AnimatedButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    // Default animations for the button container.
    const defaultMountAnimation: gsap.TweenVars = {
        duration: 0.5,
        opacity: 0,
        scale: 0.8,
        ease: "back.out(1.7)",
    };

    const defaultClickAnimation: gsap.TweenVars = {
        duration: 0.2,
        scale: 1.1,
        yoyo: true,
        repeat: 1,
    };

    const defaultHoverAnimation: gsap.TweenVars = {
        duration: 0.3,
        scale: 1.05,
    };

    const defaultHoverLeaveAnimation: gsap.TweenVars = {
        duration: 0.3,
        scale: 1.0,
    };

    // Run the mount animation when the component loads.
    useEffect(() => {
        if (buttonRef.current) {
            gsap.from(buttonRef.current, mountAnimation || defaultMountAnimation);
        }
    }, [mountAnimation]);

    // Custom scramble effect function
    const scrambleTextEffect = (
        el: HTMLElement,
        originalText: string,
        duration: number,
        scrambleChars: string,
        revealDelay: number
    ) => {
        gsap.to({}, {
            duration: duration,
            delay: revealDelay,
            onUpdate: function () {
                const progress = this.progress();
                const scrambled = originalText
                    .split("")
                    .map((char) => {
                        // The higher the progress, the higher the chance to reveal the original character.
                        if (Math.random() < progress) return char;
                        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                    })
                    .join("");
                el.innerText = scrambled;
            },
            onComplete: () => {
                el.innerText = originalText;
            }
        });
    };

    // Click handler with a simple pulse and scramble on click.
    const handleClick = () => {
        if (buttonRef.current) {
            gsap.to(buttonRef.current, clickAnimation || defaultClickAnimation);
        }
        if (textRef.current) {
            // On click, use a different set of scramble characters.
            scrambleTextEffect(textRef.current, text, 0.6, "!@#$%^&*()_+", 0.2);
        }
    };

    const handleMouseEnter = () => {
        if (buttonRef.current) {
            gsap.to(buttonRef.current, hoverAnimation || defaultHoverAnimation);
        }
        if (textRef.current) {
            scrambleTextEffect(textRef.current, text, scrambleDuration, scrambleCharsEnter, 0.5);
        }
    };

    const handleMouseLeave = () => {
        if (buttonRef.current) {
            gsap.to(buttonRef.current, hoverLeaveAnimation || defaultHoverLeaveAnimation);
        }
        if (textRef.current) {
            scrambleTextEffect(textRef.current, text, scrambleDuration, scrambleCharsLeave, 0.3);
        }
    };

    return (
        <Button
            ref={buttonRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...buttonProps}
        >
            <span ref={textRef}>{text}</span>
            <MoveRight className="w-4 h-4" />
        </Button>
    );
};

export default AnimatedButton;
