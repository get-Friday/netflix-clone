import { ButtonHTMLAttributes } from "react"
import styles from '../styles/Button.module.css'

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    const button = props.className ? props.className : 'default'
    return(
        <div className={styles.container}>
            <button {...props} className={styles[button]}>
                {props.children}
            </button>
        </div>
    )
}