import { useEffect, useState } from "react";

type TScrollOptions = {
    overflowX: string;
    overflowY: string;
};

export const useScrollLock = (on: boolean) => {
    const bodyStyles = document.body?.style;

    const overflowYOfBody = bodyStyles.overflowX;
    const overflowXOfBody = bodyStyles.overflowY;

    useEffect(() => {
        const currentScrollOptions = {
            overflowX: overflowXOfBody,
            overflowY: overflowYOfBody,
        };
        const scrollLockOptions = {
            overflowX: "hidden",
            overflowY: "hidden",
        };
        const handleBodyScroll = (scrollOptions: TScrollOptions) => {
            bodyStyles.overflowX = scrollOptions.overflowX;
            bodyStyles.overflowY = scrollOptions.overflowY;
        };
        if (on) {
            overflowYOfBody && handleBodyScroll(currentScrollOptions);
        } else {
            overflowYOfBody && handleBodyScroll(scrollLockOptions);
        }
        return () => {
            overflowYOfBody && handleBodyScroll(scrollLockOptions);
        };
    }, [on]);
};

export default useScrollLock;
