import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderMain from "../HeaderMain/HeaderMain";
import favoriteIcon from "../../../assets/Images/love-favorite-heart-svgrepo-com.svg";

function GetRecipe() {
  const { id } = useParams();
  const [getId, setGetId] = useState([]);

  useEffect(() => {
    getProductId();
  }, [id]);

  async function getProductId() {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    setGetId(res.data.meals[0]);
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
  return (
    <>
      <div>
        <HeaderMain />
      </div>
      <div className=" flex flex-col justify-center p-10 bg-[#972e56] m-6 w-[100] h-full ">
        <h1 className="flex justify-center text-amber-200 font-semibold text-3xl mb-4 ">
          {getId.strCategory}
        </h1>
        <div className="relative">
          <div className="absolute right-1 top-1">
            <button className="bg-amber-50 rounded-2xl ">
              <img className="h-[35px]" src={favoriteIcon} alt="favoriteIcon" />
            </button>
          </div>
          <img
            className="w-[100] size-auto rounded-2xl"
            src={getId.strMealThumb}
            alt=""
          />
        </div>
        {ingredients.map((items, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-black rounded-2xl mt-2 "
          >
            <ul>
              <li className="text-amber-50 sm:text-2xl md:text-3xl lg:text-4xl">
                {items.ingrdent} : {items.measure}
              </li>
            </ul>
          </div>
        ))}
        <div className="">
          <h3 className="font-semibold italic text-[18px] sm:text-[25px]  md:text-[35px] m-2 ">
            Ingrediance-Instruction :
          </h3>
          <p className="text-amber-50 text-sm whitespace-pre-line ">
            {getId.strInstructions}
          </p>
        </div>
      </div>
    </>
  );
}

export default GetRecipe;
