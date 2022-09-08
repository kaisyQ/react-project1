import React from "react"
import styles from './Button.module.scss'

const Button = ({ children, onClick, padding }) => {
    return <>
        <button onClick={onClick} style={{ padding }} className={styles.btn}>{ children }</button>
    </>    
}

export default Button