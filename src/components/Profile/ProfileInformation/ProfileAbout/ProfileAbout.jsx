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
                    props.aboutMyJob ?
                        <p className={styles.aboutItem}>{props.aboutMyJob}</p> :
                        <p className={styles.aboutItem}>Here will be something my job</p>
                }
                <p 
                    className={`${styles.profileLnkNav} ${showLnk ? styles.withDwnArrow : styles.withUpArrow}`}
                    onClick={() => {setShowLnk(showLnk => !showLnk)}}>
                        {!showLnk ? 'Show Links' : 'Hide Links'} 
                </p>
                {
                    showLnk && <>
                        <div className={styles.profileLinks}>
                            {
                                props.links.vk === null ?
                                <div className={styles.linkIcon}>
                                    <a href={props.links.vk}>
                                        <i className="fa fa-vk" aria-hidden="true"></i>
                                    </a>
                                </div> :
                                <div className={styles.linkMessage}>
                                    'I didn`t have a vk account...'
                                </div>
                            }    
                            {
                                props.links.twitter ?
                                <div className={styles.linkIcon}>
                                    <a href={props.links.twitter}>
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </div> :
                                <div className={styles.linkMessage}>
                                    'I didn`t have a twitter account...'
                                </div>
                            }   
                            {
                                props.links.facebook ?
                                <div className={styles.linkIcon}>
                                    <a href={props.links.facebook}>
                                        <i className="fa fa-facebook-official" aria-hidden="true"></i>  
                                    </a>
                                </div> :
                                <div className={styles.linkMessage}>
                                    'I didn`t have a facebook account...'
                                </div>
                            }           
                        </div>
                    </>
                }
            </div >
        </>
    
}

export default ProfileAbout