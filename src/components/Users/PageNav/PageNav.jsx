import React from "react"
import styles from './PageNav.module.scss'
import { makeNavArr } from "./pageN-generate"

const PageNav = ({currentPage, totalCount, pageCount, changeCurrentPage, getUsersToShow}) => {
    const onPageNumberClick = (pageIndx) => {
        changeCurrentPage(pageIndx)
        getUsersToShow(pageIndx)
    }
    return <>
        <div className={styles.pageNav}>
            {
                makeNavArr(currentPage, Math.ceil(totalCount / pageCount ))
                .map((num, index) => <div onClick={() => onPageNumberClick(num)} key={index}>{num}</div>)
            }
        </div>
    </>
}

export default PageNav