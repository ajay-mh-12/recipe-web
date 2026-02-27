import { useContext } from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import { clickContext } from "../../App";
import RecipeCard from "../Header/ResultPage/RecipeCard/RecipeCard";

function Favorite({ recipes = [] }) {
  const { click } = useContext(clickContext);

  console.log(typeof click);

  return (
    <>
      <HeaderMain />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4 p-5">
        {click.length === 0 ? (
          <h2 className="text-center mt-5">No Favorites Added</h2>
        ) : (
          click.map((items, index) => (
            <RecipeCard
              key={index}
              id={items.id}
              name={items.name}
              image={items.image}
              category={items.category}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Favorite;
