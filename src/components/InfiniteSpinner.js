import React, { Component } from 'react'
import infiniteLoading from "./InfinityLoading.gif"

export default class InfiniteSpinner extends Component {
    render() {
        return (
            <div className='text-center '>
                <img src={infiniteLoading} alt="loading" style={{ width: "4%", margin: "2rem" }} />
            </div>
        )
    }
}


