import axios from "axios";
import { searchContext, storeContext } from "../App";
import Loader from "./Loader/Loader";
import RecipeCard from "./RecipeCard/RecipeCard";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ResultPage() {
  const { products, setProducts } = useContext(searchContext);
  const { store,setStore } = useContext(storeContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  
    useEffect(() => {
    getProducts(store);
  }, [store]);

  function handleHomeClick() {
    navigate("/");
    setStore("")
  }
 

  //  Fetch searched meals
  async function getProducts() {
    setLoading(true);
    // setError("");
    try {
      const response = await axios.get(
       `https://www.themealdb.com/api/json/v1/1/search.php?s=${store}`
      );

      setProducts(response.data.meals || []);
    } catch (err) {
      setError("Failed to fetch recipes");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }


  // Loader
  if (loading) {
    return <Loader />;
  }

  //  No results 
  if (!loading && (!products || products.length === 0) && store) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No recipes found for
        <div>
          <button onClick={handleHomeClick} className="bg-[#b22235] p-1 font-bold text-black rounded ">Go to Home</button>
        </div>
      </div>

    );
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