import React from "react"
import styles from './Button.module.scss'

const Button = ({ children, padding }) => {
    
    return <>
        <button style={{ padding }} className={styles.btn}>{ children }</button>
    </>    
}

export default Button