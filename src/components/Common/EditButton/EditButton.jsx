import React from "react"
import edit from "../.././../Images/pencil.png"
import editSvg from "../../../Images/edit.svg"
import styles from "./EditButton.module.scss"

const EditButton = () => {
   return <>
      <button className={styles.edit}>
         <img src={editSvg} alt="edit" width="22px" height="22px" className={styles.editImg}/>
      </button>
   </>
}

export default EditButton