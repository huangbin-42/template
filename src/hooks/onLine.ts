import { useEffect, useState } from "react";

/**
 * 判断当前环境是否有 网络
 * @returns [boolean]
 */
const useOnLine = () => {
    const [isOnline, setIsOnline] = useState<boolean>(window.navigator.onLine);

    useEffect(() => {
        setIsOnline(window.navigator.onLine);
    }, [window.navigator.onLine]);

    return [isOnline];
};

export default useOnLine