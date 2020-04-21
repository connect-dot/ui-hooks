import { useCallback, useEffect, useState } from 'react';

export const useScrollLock: (initialFlag?: boolean) => [boolean, () => void] = (
  initialFlag = false
) => {
  const [flag, setFlag] = useState<boolean>(initialFlag);

  const toggleFlag = useCallback(() => {
    setFlag(prevFlag => !prevFlag);
  }, []);

  useEffect(() => {
    const body = window.document.getElementsByTagName('body')[0];
    if (flag) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'scroll';
    }
    return () => {
      body.style.overflow = 'scroll';
    };
  }, [flag]);

  return [flag, toggleFlag];
};

export default useScrollLock;
