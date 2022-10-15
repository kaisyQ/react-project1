import React from "react"
import styles from './Button.module.scss'

const Button = ({ children, onClick, type, padding, disabled }) => {
    return <>
        <button disabled={disabled} type={type} onClick={onClick} style={{ padding }} className={styles.btn}>{ children }</button>
    </>
}

export default Button