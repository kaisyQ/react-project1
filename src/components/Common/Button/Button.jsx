import React from "react"
import styles from './Button.module.scss'

const Button = ({ children, onClick, type, padding }) => {
    return <>
        <button type={type} onClick={onClick} style={{ padding }} className={styles.btn}>{ children }</button>
    </>
}

export default Button