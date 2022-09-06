import React from 'react'

import styles from './Preloader.module.scss'
import preloader from '../../../Images/preloader.svg'

const Preloader = () => {
    return <div className={styles.preloader}>
        <img src={preloader} alt='preloader'/>
    </div>
}

export default Preloader