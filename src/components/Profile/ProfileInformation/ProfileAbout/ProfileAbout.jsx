import React, { useState } from "react"
import styles from './ProfileAbout.module.scss'

const ProfileAbout = (props) => {
    const [showLnk, setShowLnk] = useState(false)
    return <>
            <div className={styles.profileAbout}>
                {
                    props.aboutMe ?
                        <p className={styles.aboutItem}>{props.aboutMe}</p> :
                        <p className={styles.aboutItem}>Here will be something about me</p>
                    
                }
                {
                    props.lookingForAJobDescription ?
                        <p className={styles.aboutItem}>{props.lookingForAJobDescription}</p> :
                        <p className={styles.aboutItem}>Here will be something my job</p>
                }
                <p 
                    className={`${styles.profileLnkNav} ${showLnk ? styles.withDwnArrow : styles.withUpArrow}`}
                    onClick={() => {setShowLnk(showLnk => !showLnk)}}>Show Links 
                </p>
                {
                    showLnk && <div
                        className={styles.profileLinks}>
                        <div className={styles.linkIcon}>
                            <i className="fa fa-github-square" aria-hidden="true"></i>
                        </div>
                        <div className={styles.linkIcon}>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div className={styles.linkIcon}>
                            <i className="fa fa-telegram" aria-hidden="true"></i>
                        </div>
                        <div className={styles.linkIcon}>
                            <i className="fa fa-facebook-official" aria-hidden="true"></i>  
                        </div>
                    </div>
                }
            </div >
        </>
    
}

export default ProfileAbout