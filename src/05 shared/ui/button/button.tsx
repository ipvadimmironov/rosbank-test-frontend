import { Button as AntButton } from 'antd';

import styles from "./button.module.scss";
import { ComponentProps, FC, ReactNode, RefAttributes } from 'react';


type ButtonProps = {
    children?: ReactNode
    Icon?: any
    type?: "link" | "text" | "default" | "primary" | "dashed" | undefined
} & Omit<ComponentProps<"button">, "type">

const Button: FC<ButtonProps> = ({ children = "Click me", Icon, ...rest }) => {
    return <AntButton className={styles.myButton} icon={Icon} {...rest} >
        {children}</AntButton>
}


export default Button


