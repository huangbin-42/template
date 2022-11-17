/**
 * 设置LocalStorag
 * @param key
 * @param value
 */
export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, value);
};

/**
 * 获取LocalStorag
 * @param key
 * @returns
 */
export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key) || "";
};

/**
 * 删除LocalStorag
 * @param key
 */
export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};

/**
 * 清空LocalStorag
 */
export const clearLocalStorage = () => {
    localStorage.clear();
};
