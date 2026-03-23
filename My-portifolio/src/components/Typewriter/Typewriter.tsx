import React, { useEffect, useRef, useState } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface TypewriterProps {
    text: string;
    delay: number;
    variant?: TypographyProps["variant"];
    color?: string;
    startDelay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay, variant = "body1", color = "text.primary", startDelay = 0 }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [started, setStarted] = useState(startDelay <= 0);

    const startTimeout = useRef<number | null>(null);
    const typingTimeout = useRef<number | null>(null);

    useEffect(() => {
        // Reset when text or startDelay changes
        setCurrentText("");
        setCurrentIndex(0);
        setShowCursor(true);
        setStarted(startDelay <= 0);

        if (startTimeout.current) {
            window.clearTimeout(startTimeout.current);
            startTimeout.current = null;
        }
        if (typingTimeout.current) {
            window.clearTimeout(typingTimeout.current);
            typingTimeout.current = null;
        }
    }, [text, startDelay]);

    useEffect(() => {
        if (!started) {
            startTimeout.current = window.setTimeout(() => setStarted(true), startDelay);
            return () => {
                if (startTimeout.current) {
                    window.clearTimeout(startTimeout.current);
                    startTimeout.current = null;
                }
            };
        }
    }, [startDelay, started]);

    useEffect(() => {
        if (!started) return;
        if (currentIndex < text.length) {
            typingTimeout.current = window.setTimeout(() => {
                setCurrentText((prev) => prev + text[currentIndex]);
                setCurrentIndex((i) => i + 1);
            }, delay);

            return () => {
                if (typingTimeout.current) {
                    window.clearTimeout(typingTimeout.current);
                    typingTimeout.current = null;
                }
            };
        }
    }, [started, currentIndex, delay, text]);

    useEffect(() => {
        const id = window.setInterval(() => setShowCursor((v) => !v), 500);
        return () => window.clearInterval(id);
    }, []);

    return (
        <Typography variant={variant} color={color} textAlign="center" sx={{ fontFamily: "monospace" }}>
            {currentText}
            <span style={{ opacity: showCursor ? 1 : 0, transition: "opacity 120ms" }}>|</span>
        </Typography>
    );
};

export default Typewriter;
