import React, { useState } from 'react'

const SearchPageLogic = () => {
    const [pageNo, setPageNo] = useState(1)
    return {
        pageNo,setPageNo
    }
}

export default SearchPageLogic