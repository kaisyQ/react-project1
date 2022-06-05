import React from 'react'

import css from './Preloader.module.css'
import preloader from '../../../Images/preloader.svg'

const Preloader = () => {
    return <div className={css.container}>
        <img src={preloader} alt=''/>
    </div>
}

export default Preloader