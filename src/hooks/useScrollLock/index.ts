import { useEffect } from "react";

export const useScrollLock = (on: boolean) => {
    useEffect(() => {
        const body = window.document.getElementsByTagName("body")[0];

        if (on) body.style.overflow = "hidden";
        body.style.overflow = "scroll";

        return () => {
            body.style.overflow = "scroll";
        };
    }, [on]);
};

export default useScrollLock;
