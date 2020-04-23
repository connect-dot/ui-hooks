import { useEffect, useState } from "react";

type TScrollOptions = {
    overflowX: string;
    overflowY: string;
};

export const useScrollLock = (on: boolean) => {
    useEffect(() => {
        const body = document.body;

        const [overflowYOfBody, setOverflowYOfBody] = useState<string | undefined>(body?.style.overflowY);

        const [overflowXOfBody, setOverflowXOfBody] = useState<string | undefined>(body?.style.overflowX);

        const currentScrollOptions = {
            overflowX: overflowXOfBody,
            overflowY: overflowYOfBody,
        };

        const scrollLockOptions = {
            overflowX: "hidden",
            overflowY: "hidden",
        };

        const handleBodyScroll = (scrollOptions: TScrollOptions) => {
            body.style.overflowX = scrollOptions.overflowX;
            body.style.overflowY = scrollOptions.overflowY;
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
