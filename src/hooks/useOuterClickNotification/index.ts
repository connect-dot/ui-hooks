import { useCallback, useEffect } from "react";

const useOuterClickNotification = (onOuterClick: Function, innerRef: React.RefObject<HTMLElement>) => {
    const handleClick = useCallback((event: globalThis.MouseEvent) => {
        const shouldNotifyOuterClick =
            innerRef.current && event.target && !innerRef.current.contains(event.target as Node);

        if (shouldNotifyOuterClick) onOuterClick();

    }, []);

    useEffect(() => {
        if (innerRef.current) {
            document.addEventListener("click", handleClick, true);
            return () => document.removeEventListener("click", handleClick, true);
        }
    }, [onOuterClick, innerRef, handleClick]);
};

export default useOuterClickNotification;
