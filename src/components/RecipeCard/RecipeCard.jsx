import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import loveIcon from "../../assets/Images/love-favorite-heart-svgrepo-com.svg";
import fillLove from "../../assets/Images/heart-svgrepo-com.svg";
import { clickContext } from "../../App";
import { STORAGE_FAV_MEALS } from "../../constants/Constants";
function RecipeCard(props) {
  const { click, setClick, checkIsFav } = useContext(clickContext);
  const favorite = checkIsFav(props.id);
  const navigate = useNavigate();

  function handleOnclick() {
    setClick((prev) => {
      let updateMeals;
      const exists = prev.some((item) => item.id === props.id);
      if (exists) {
        updateMeals = prev.filter((meal) => meal.id !== props.id);
      } else {
        updateMeals = [...prev, props];
      }
      console.log({ prev, props, click });

      localStorage.setItem(STORAGE_FAV_MEALS, JSON.stringify(updateMeals));
      return updateMeals;
    });
  }

  return (
    <>
      <div className="bg-[#b22235] p-4 rounded-md flex flex-col justify-center">
        <div>
          <h2 className="items-center  font-bold mb-1 text-amber-50 lg:text-xs mb:text-base ">
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
