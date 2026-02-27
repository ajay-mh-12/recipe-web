import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import {  searchContext, storeContext } from "../../../App";
import Loader from "../../Loader/Loader";
import RecipeCard from "./RecipeCard/RecipeCard";

function ResultPage() {
  const { products, setProducts } = useContext(searchContext);
  const { store, setStore } = useContext(storeContext);
  // const {favorite} = useContext(favoriteContext);
  
  const [error, setError] = useState("");
  console.log(store);
  const [loading, setLoading] = useState(false);
   

  // click function //

  

  useEffect(() => {
    getProducts(store);
  }, [store]);

  async function getProducts() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${store}`,
      );
      console.log(response);
      setProducts(response.data.meals);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4 p-5">
        {error !== "" && error}
        {products.map((products) => {
          return (
            <RecipeCard key={products.idMeal} id={products.idMeal} image={products.strMealThumb} name={products.strMeal} category={products.strCategory}/>
           
          );
        })}
      </div>
    </>
  );
}
export default ResultPage;
