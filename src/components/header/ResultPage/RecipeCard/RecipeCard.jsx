import { React } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loveIcon from "../../../../assets/Images/love-favorite-heart-svgrepo-com.svg";
import fillLove from "../../../../assets/Images/heart-svgrepo-com.svg";
import { clickContext } from "../../../../App";
function RecipeCard(props) {
  const [favorite, setFavorite] = useState(false);

  const { click, setClick } = useContext(clickContext);

  const navigate = useNavigate();

  function handleOnclick() {
    setFavorite(!favorite);

    setClick((prev) => {
      if (prev.includes(props.id)) {
        return prev.filter((id) => id !== props.id);
      }

      return [...prev, props];
    });
  }

  return (
    <>
      <div className="bg-[#b22236] p-4 rounded-md">
        <div>
          <h2 className="items-center flex justify-center font-bold mb-1 text-amber-50 ">
            {props.name}
          </h2>
          <div className="relative">
            <div className="absolute top-1 right-0.5 rounded-2xl bg-amber-50 flex justify-center  ">
              <button onClick={handleOnclick}>
                {favorite ? (
                  <img className="h-[25px]" src={fillLove} alt="loveicon" />
                ) : (
                  <img className="h-[25px]" src={loveIcon} alt="loveicon" />
                )}
              </button>
            </div>
            <img className="" src={props.image} alt={props.name} />
          </div>
          <div className="flex bg-amber-300 my-1 rounded-sm px-2 w-full">
            <p className="font-serif text-sm ">Catgry:</p>
            <p className="font-bold text-base whitespace-normal text-sm ">
              {props.category}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center px-2 bg-black m-2 rounded-2xl ">
          <button
            className=" text-amber-50"
            onClick={() => navigate(`/recipe/${props.id}`)}
          >
            GET RECIPE
          </button>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
