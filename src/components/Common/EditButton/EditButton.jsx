import React from "react"
import editSvg from "../../../Images/edit.svg"
import styles from "./EditButton.module.scss"

const EditButton = ({ onClick }) => {
   return <>
      <button className={styles.edit}>
         <img src={editSvg} alt="edit" width="45px" height="45px" className={styles.editImg} onClick={onClick} />
      </button>
   </>
}

export default EditButton