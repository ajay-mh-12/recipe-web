import React from "react";
import loader from "../../assets/Images/cloud-arrow-down-fill-svgrepo-com.svg"

function Loader(){
    return(
        <>
        <div>
            <p>product is loading</p>
            <img src={loader} alt="" />
        </div>


        </>
    )
}
export default Loader