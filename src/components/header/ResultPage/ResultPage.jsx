import React, { useState, useEffect } from "react";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";
import Search from "../search";
import loveIcon from "../../../assets/Images/love-favorite-heart-svgrepo-com.svg"
import { useContext } from "react";
import { searchContext, storeContext } from "../../../App";
import Loader from "../../Loader/Loader";

function ResultPage() {
  const { products, setProducts } = useContext(searchContext);
  const { store, setStore } = useContext(storeContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  console.log(store);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    getProducts(store);

    // axios
    //   .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${store}`)
    //   .then((response) => setProducts(response.data.meals))
    //   .catch((error)=>setError(error.message));
  }, [store]);

  async function getProducts() {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${store}`,
      );
      console.log(response);
      setProducts(response.data.meals);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false)
    }
  }

  if(loading) {
    return <Loader/>
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4 p-5">
        {error !== "" && error}
        {products.map((products) => {
          return (
            <div key={products.idMeal} className="bg-[#b22236] p-4 rounded-md">
              <div>
                <h2 className="items-center flex justify-center font-bold mb-1 text-amber-50 ">
                  {products.strMeal}
                </h2>
                <div className="relative">
                  <div className="absolute top-1 right-0.5 rounded-2xl bg-amber-50 flex justify-center  ">
                    <button><img className="h-[25px]" src={loveIcon} alt="loveicon" /></button>
                  </div>
                  <img className="" src={products.strMealThumb} alt={products.strMeal} />
                </div>
                <div className="flex bg-amber-300 my-1 rounded-sm px-2 w-full">
                  <p className="font-serif text-sm ">Catgry:</p>
                  <p className="font-bold text-base whitespace-normal text-sm ">
                    {products.strCategory}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center px-2 bg-black m-2 rounded-2xl ">
                <button
                  className=" text-amber-50"
                  onClick={() => navigate(`/recipe/${products.idMeal}`)}
                >
                  GET RECIPE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ResultPage;
