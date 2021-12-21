import { ButtonHTMLAttributes } from "react"
import styles from '../styles/Button.module.css'

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return(
        <button {...props} className={styles.button}>
            {props.children}
        </button>
    )
}