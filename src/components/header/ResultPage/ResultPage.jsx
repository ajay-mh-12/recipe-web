import React, { useState, useEffect } from "react";
import axios from "axios";
import { data } from "react-router-dom";
import Search from "../search";

function ResultPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts();
    // axios
    //   .get(" https://www.themealdb.com/api/json/v1/1/search.php?s")
    //   .then((response) => setProducts(response.data.meals))
    //   .catch((error)=>setError(error.message));
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s",
      );
      console.log(response);
      setProducts(response.data.meals);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4 p-5">
        {error !== "" && error}
        {products.map((products, index) => {
          return (
            <div className="bg-[#b22236] p-4 rounded-md">
              <div>
              <h2 className="items-center flex justify-center font-bold mb-1 text-amber-50" key={products.idMeal}>{products.strMeal}</h2>
              <img className="" src={products.strMealThumb} alt="" />
              <div className="flex bg-amber-300 my-1 rounded-sm px-2 w-full">
              <p className="font-serif text-sm ">Catgry:</p>
              <p className="font-bold text-base whitespace-normal text-sm ">{products.strCategory}</p>
              </div>
              </div>
              <div className="flex items-center justify-center px-2 bg-black m-2 rounded-2xl ">
                <button className=" text-amber-50" >GET RECIPE</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ResultPage;
