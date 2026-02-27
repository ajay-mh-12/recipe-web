import React from "react";
import loader from "../../assets/Images/cloud-arrow-down-fill-svgrepo-com.svg"

function Loader(){
    return(
        <>
        <div className="flex justify-center items-center" >
            <p className="text-[15px] sm:text-[25px]  ">server is loading</p>
            <img className="h-80" src={loader} alt="" />
        </div>


        </>
    )
}
export default Loader