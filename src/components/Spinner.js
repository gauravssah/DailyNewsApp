import React, { Component } from 'react'
import loading from "./DubalBallLoding.gif"

const Spinner = () => {

    return (
        <div className='' style={{ width: "95vw", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={loading} alt="loading" style={{ width: "70px" }} />
        </div>
    )

}

export default Spinner;
