import { useCallback, useEffect } from "react";

const useOuterClickNotification = (onOuterClick: Function, innerRef: React.RefObject<HTMLElement>) => {
    const handleOuterClick = useCallback((event: globalThis.MouseEvent) => {
        const shouldNotifyOuterClick =
            innerRef.current && event.target && !innerRef.current.contains(event.target as Node);

        if (shouldNotifyOuterClick) onOuterClick();
    }, []);

    useEffect(() => {
        document.addEventListener("click", handleOuterClick, true);
        return () => document.removeEventListener("click", handleOuterClick, true);
    }, [onOuterClick, innerRef, handleOuterClick]);
};

export default useOuterClickNotification;
