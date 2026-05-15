import { useEffect, useRef, useState } from 'react';

export const useInterval = (callback: () => void, interval = 1000, startAs = false) => {
    const [active, setActive] = useState(startAs);
    const intervalIdRef = useRef<ReturnType<typeof setInterval>>(setInterval(() => { }, interval));
    const callbackRef = useRef(callback);

    // Update the reference to the latest callback
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!active) return;

        intervalIdRef.current = setInterval(() => callbackRef.current(), interval);

        return () => clearInterval(intervalIdRef.current);
    }, [active, interval]);

    return {
        active,
        pause: () => setActive(false),
        resume: () => setActive(true),
        toggle: () => setActive(prev => !prev)
    };
};