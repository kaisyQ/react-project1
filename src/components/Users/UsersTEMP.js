export const makeNavArr = (currentPage, TotalUsersCount) => {
    let tempArrOfPageNumbers = []
    if (TotalUsersCount - currentPage < 10) {
        tempArrOfPageNumbers.push(1)
        for(let i = TotalUsersCount - 9; i < TotalUsersCount; ++i) {
            tempArrOfPageNumbers.push(i)
        }
    } else {
        switch (currentPage) {
            case 1:
                for(let i = 0; i < 9; ++i) {
                    tempArrOfPageNumbers.push(currentPage + i)
                }
                break
            case 2:
                for(let i = 0; i < 9; ++i) {
                    tempArrOfPageNumbers.push(currentPage - 1 + i)
                }
                break
            default:
                tempArrOfPageNumbers.push(1)
                for(let i = 0; i < 8; ++i) {
                    tempArrOfPageNumbers.push(currentPage + i)
                }
                break   
        }
    }
    tempArrOfPageNumbers.push(TotalUsersCount)
    return tempArrOfPageNumbers
}