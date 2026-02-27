import axios from "axios";
import { searchContext, storeContext } from "../App";
import Loader from "./Loader/Loader";
import RecipeCard from "./RecipeCard/RecipeCard";
import { useContext, useEffect, useState } from "react";

function ResultPage() {
  const { products, setProducts } = useContext(searchContext);
  const { store } = useContext(storeContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Fetch random meals on first load
  async function getRandomMeals(count = 18) {
    setLoading(true);
    setError("");

    try {
      const requests = Array.from({ length: count }, () =>
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      );

      const responses = await Promise.all(requests);
      const meals = responses.map((res) => res.data.meals[0]);

      setProducts(meals);
    } catch (err) {
      setError("Failed to load recipes");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  // 🔹 Fetch searched meals
  async function getProducts() {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
       ` https://www.themealdb.com/api/json/v1/1/search.php?s=${store}`
      );

      setProducts(response.data.meals || []);
    } catch (err) {
      setError("Failed to fetch recipes");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

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

  // 🔹 Loader
  if (loading) {
    return <Loader />;
  }

  // 🔹 No results UI
  if (!loading && products.length === 0 && store) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No recipes found for{" "}
        <span className="font-semibold">"{store}"</span>
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
