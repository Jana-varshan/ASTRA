import { useEffect } from "react";

export const useKeyboard = (callback: () => void) => {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.code === "Space") {
                e.preventDefault();
                callback();
            }
        };

        window.addEventListener("keydown", handler);

        return () => window.removeEventListener("keydown", handler);
    }, [callback]);
};