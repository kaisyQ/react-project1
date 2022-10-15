import React from "react"
import { useFormik } from "formik"

import styles from './EditProfileModal.module.scss'
import Button from "../../../../Common/Button/Button"

const EditProfileModal = ({ setIsEditModalShwing, updateProfile }) => {

    const editFormik = useFormik({
        initialValues: {
            aboutMe: '',
            aboutMyJob: '',
            vk: '',
            facebook: '',
            twitter: ''
        },
        onSubmit: (values) => {
            updateProfile(values)
        }
    })
    return <>
        <div className={styles.formContainer}>
            <form onSubmit={editFormik.handleSubmit}>
                <div className={styles.formItem}>
                    <label>About Me</label>
                    <input id="aboutMe" type="text" value={editFormik.values.aboutMe} onChange={editFormik.handleChange}/>
                </div>
                <div className={styles.formItem}>
                    <label>About My Job</label>
                    <input id="aboutMyJob" type="text" value={editFormik.values.aboutMyJob} onChange={editFormik.handleChange}/>
                </div>
                <div className={styles.formItem}>
                    <label>My VK</label>
                    <input id="vk" type="text" value={editFormik.values.vk} onChange={editFormik.handleChange}/>
                </div>
                <div className={styles.formItem}>
                    <label>My Facebook</label>
                    <input id="facebook" type="text" value={editFormik.values.facebook} onChange={editFormik.handleChange}/>
                </div>
                <div className={styles.formItem}>
                    <label>My Twitter</label>
                    <input id="twitter" type="text" value={editFormik.values.twitter} onChange={editFormik.handleChange}/>
                </div>
                <div className={styles.formBtn}>
                    <Button type='submit' padding={'10px'}>Make Changes</Button>
                    <Button type='submit' padding={'10px'} onClick={() => { setIsEditModalShwing(false) }}>Close</Button>
                </div>
            </form>
        </div>
    </>
}

export default EditProfileModal