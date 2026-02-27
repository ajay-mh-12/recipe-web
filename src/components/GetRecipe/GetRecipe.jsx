import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderMain from "../HeaderMain/HeaderMain";
import favoriteIcon from "../../assets/Images/love-favorite-heart-svgrepo-com.svg";
import Loader from "../Loader/Loader";

function GetRecipe() {
  const { id } = useParams();
  const [getId, setGetId] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    getProductId();
  }, [id]);

  async function getProductId() {
    try{
      setLoading(true)
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
    setGetId(res.data.meals[0]);
  } catch (error) {
    console.log("error fetching recipe:", error)
  }finally {
    setLoading(false)
  }
}
  const ingredients = [];
  for (let i = 0; i < 20; i++) {
    const ingrdent = getId[`strIngredient${i}`];
    const measure = getId[`strMeasure${i}`];
    if (ingrdent) {
      ingredients.push({ ingrdent, measure });
    }
  }
  
  console.log(ingredients);

  if(loading){
    return <Loader/>
  }
  return (
  <>
    <div className="sticky top-0 z-[100]">
      <HeaderMain />
    </div>

    <div className="pt-20 min-h-screen bg-[#d23333] p-6 ">
      <div className="max-w-4xl mx-auto bg-[#f7c7c7] p-6 rounded">

        <h1 className="text-center text-amber-600 font-semibold text-3xl mb-6">
          {getId.strCategory}
        </h1>

        <div className="relative">
          <button className="absolute right-2 top-2 bg-amber-50 rounded-2xl p-1">
            <img className="h-8" src={favoriteIcon} alt="favoriteIcon" />
          </button>

          <img
            className="w-full h-auto rounded-2xl p-2"
            src={getId.strMealThumb}
            alt={getId.strMeal}
          />
        </div>

        <ul className="space-y-2 mt-6">
          {ingredients.map((items, index) => (
            <li
              key={index}
              className="bg-black rounded-xl px-4 py-2 text-amber-50"
            >
              {items.ingrdent} : {items.measure}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <h3 className="font-semibold italic text-xl md:text-2xl mb-2">
            Ingredient Instruction :
          </h3>

          <p className="text-black whitespace-pre-line">
            {getId.strInstructions}
          </p>
        </div>

      </div>
    </div>
  </>
);
}

export default GetRecipe;
