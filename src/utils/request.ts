import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getLocalStorage } from "./localStorage";

/** 通用响应数据类型 */
export interface InstanceResponse<T = any> {
    success?: boolean;
    data?: T;
    message: string
    code: number
}

/** 创建axios实例化 */
let instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API as string,
    //   timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
});

//请求拦截器----
instance.interceptors.request.use((config) => {
    config.headers = { language: "en" };
    if (!config.url?.includes('login')) {
        config.headers.token = `${getLocalStorage("token")}`;
    }
    return config;
});

//响应拦截器----
instance.interceptors.response.use(
    (res: any) => {
        return { ...res?.data, success: res?.code === 200 }
    },
    (err) => {
        return err;
    }
);

export default function request<T = any>(configParam: AxiosRequestConfig) {
    return instance.request<T, InstanceResponse<T>>(configParam);
}