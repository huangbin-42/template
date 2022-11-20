import useTheme from "@/hooks/theme";
import { FC } from "react";

const size = 24

export interface SVGProps {
    fill?: string
    width?: number
    height?: number
    viewBox?: string
}

export const Setting: FC<SVGProps> = ({ width, height, viewBox, fill }) => {
    const { isDarkTheme } = useTheme();
    return (
        <svg
            width={width ?? size}
            height={height ?? size}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.395 2.435a3.18 3.18 0 012.978-.123l.232.123 5.799 3.386c.488.286.89.694 1.17 1.183.23.405.372.857.416 1.368l.01.242v6.772c0 .568-.148 1.122-.426 1.61a3.255 3.255 0 01-.968 1.053l-.202.13-5.799 3.386a3.196 3.196 0 01-3.014.105l-.196-.105-5.799-3.386a3.213 3.213 0 01-1.17-1.183 3.282 3.282 0 01-.416-1.368L3 15.386V8.614c0-.568.148-1.122.426-1.61.232-.405.549-.757.968-1.053l.202-.13zm1.98 1.626a1.18 1.18 0 00-.971.1L5.643 7.526l-.128.081A1.245 1.245 0 005 8.613l-.001 6.73.006.153c.016.18.07.353.158.508.106.186.258.34.442.448l5.763 3.366.123.066a1.18 1.18 0 001.105-.046l5.761-3.363.128-.081A1.245 1.245 0 0019 15.387l.001-6.73-.006-.153a1.244 1.244 0 00-.158-.508 1.213 1.213 0 00-.442-.448l-5.763-3.366-.134-.072zM12 9a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
                fillRule="nonzero"
                fill={`${fill ?? (isDarkTheme ? "#F4F5F6" : "#222222")}`}
            />
        </svg>
    );
};
