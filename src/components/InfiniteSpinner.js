import React from 'react'
import infiniteLoading from "./InfinityLoading.gif"

const InfiniteSpinner = () => {

    return (
        <div className='text-center '>
            <img src={infiniteLoading} alt="loading" style={{ width: "4%", margin: "2rem" }} />
        </div>
    )

}

export default InfiniteSpinner;
