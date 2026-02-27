import React, { useState, useEffect } from "react";
import searchImage from "../../assets/Images/search-svgrepo-com (2).svg";
import { data } from "react-router-dom";
import { useContext } from "react";
import { inputContext, storeContext } from "../../App";
function Search() {
  const {input,setInput} = useContext(inputContext);
  const {store,setStore} = useContext(storeContext)
  


  function handleChange(e) {
    setInput(e.target.value);
  }
  // console.log(input)
  function handleClick() {
    setStore(input)
  }

  return (
    <>
      <div className="my-4 flex px-6 py-2 items-center text-center justify-between  relative bg-amber-50 rounded-3xl w-full mx-4 ">
        <input
          className="outline-none text-[#963d52] w-full sm:w-3/4 md:w-1/2 lg:w-1/4"
          type="text"
          placeholder="Enter the meals"
          onChange={handleChange}
        />
        <button
          className="bg-[rgb(212,182,189)] p-3 rounded-full absolute right-0"
          onClick={handleClick}
        >
          <img className="h-4 " src={searchImage} alt="searchingIcon" />
        </button>
      </div>  
      
    </>
  );
}

export default Search;
