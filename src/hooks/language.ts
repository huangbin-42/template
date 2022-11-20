import {  useMemo } from "react";

/**
 * 判断当前 语言
 * @returns [string]
 */
const useLanguage = () => {
    const language = useMemo(() => {
        return navigator.language === 'zh-CN' ? 'zh' : 'en'
    }, [navigator.language])

    return [language];
};

export default useLanguage