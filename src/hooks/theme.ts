import { useMemo, useState } from "react";

/**
 * 获取浏览器主题
 * @returns theme : 'light' | 'dark' ,isDarkTheme: boolean
 * @explain isDarkTheme 是否是暗色主题
 */
const useTheme = () => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
        mediaQueryList.matches || false
    );

    mediaQueryList.addEventListener("change", (e: MediaQueryListEvent) => {
        setIsDarkTheme(e.matches);
    });

    const theme = useMemo(() => {
        return isDarkTheme ? "dark" : "light";
    }, [isDarkTheme]);

    return { theme, isDarkTheme };
};

export default useTheme