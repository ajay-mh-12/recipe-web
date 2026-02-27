import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { createContext, useState } from "react";
import GetRecipe from "./components/Header/GetRecipe/GetRecipe";
import Favorite from "./components/Header/Favorite/Favorite";
import { STORAGE_FAV_MEALS } from "./constants/Constants";

export const searchContext = createContext();
export const inputContext = createContext();
export const storeContext = createContext();
export const favoriteContext = createContext();
export const clickContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [store, setStore] = useState("");
  const [click, setClick] = useState(() => {
    const storedFavs = localStorage.getItem(STORAGE_FAV_MEALS);
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  const checkIsFav = (id) => {
    if (click.some((item) => item.id === id)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <searchContext.Provider value={{ products, setProducts }}>
        <inputContext.Provider value={{ input, setInput }}>
          <storeContext.Provider value={{ store, setStore }}>
            <clickContext.Provider value={{ click, setClick, checkIsFav }}>
              <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/recipe/:id" element={<GetRecipe />} />
                <Route
                  path="/favorite"
                  element={<Favorite recipes={products} />}
                />
              </Routes>
            </clickContext.Provider>
          </storeContext.Provider>
        </inputContext.Provider>
      </searchContext.Provider>
    </>
  );
}

export default App;
