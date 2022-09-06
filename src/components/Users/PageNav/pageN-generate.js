const MAX_ARR_LEN = 10

export const makeNavArr = (currentPage, TtlPageCnt) => {
    const tempArrOfPageNumbers = []
    
    if (TtlPageCnt - currentPage < MAX_ARR_LEN) {
        tempArrOfPageNumbers.push(1)
        for (let i = TtlPageCnt - (MAX_ARR_LEN - 1); i < TtlPageCnt; ++i) tempArrOfPageNumbers.push(i)
    } else {
        switch (currentPage) {
            case 1:
                for (let i = 0; i < (MAX_ARR_LEN - 1); ++i) tempArrOfPageNumbers.push(currentPage + i)
                break
            case 2:
                for (let i = 0; i < (MAX_ARR_LEN - 1); ++i) tempArrOfPageNumbers.push(currentPage - 1 + i)
                break
            default:
                tempArrOfPageNumbers.push(1)
                for (let i = 0; i < (MAX_ARR_LEN - 2); ++i) {
                    tempArrOfPageNumbers.push(currentPage + i)
                }
                break
        }
    }
    tempArrOfPageNumbers.push(TtlPageCnt)
    return tempArrOfPageNumbers
}