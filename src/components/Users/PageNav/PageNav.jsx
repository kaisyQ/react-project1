import React from "react"
import styles from './PageNav.module.scss'
import Button from './../../Common/Button/Button'
import { makeNavArr } from "./pageN-generate"

const PageNav = ({currentPage, totalCount, pageCount, changeCurrentPage, getUsersToShow}) => {
    const onPageNumberClick = (pageIndx) => {
        changeCurrentPage(pageIndx)
        getUsersToShow(pageIndx)
    }
    return <>
        <table className={styles.pageNav}>
            <tbody>
                <tr>
                    {
                        makeNavArr(currentPage, Math.ceil(totalCount / pageCount ))
                        .map((num, index) => <td 
                            onClick={() => onPageNumberClick(num)}
                            key={index}><Button padding={'15px 20px'}>{num}</Button></td>)
                    }
                </tr>
            </tbody>
        </table>
    </>
}

export default PageNav