import { useEffect, useState } from "react";

export const useScrollLock = (on: boolean) => {
    useEffect(() => {
        const body = window.document.getElementsByTagName("body")[0];
        if (on) {
            body && (body.style.overflow = "hidden");
        } else {
            body && (body.style.overflow = "scroll");
        }
        return () => {
            body && (body.style.overflow = "scroll");
        };
    }, [on]);
};

export default useScrollLock;
