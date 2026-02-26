import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Search from "./components/header/search";
import { createContext, useState } from "react";
import GetRecipe from "./components/header/GetRecipe/GetRecipe";
import Favorite from "./components/header/Favorite/Favorite";

export const searchContext = createContext();
export const inputContext = createContext();
export const storeContext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [store,setStore] = useState("")
  return (
    <>
      <searchContext.Provider value={{ products, setProducts }}>
        <inputContext.Provider value={{ input, setInput }}>
        <storeContext.Provider value={{store,setStore}}>

          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/recipe/:id" element={<GetRecipe/>}/>
            <Route path="/favorite" element={<Favorite/>}/>
          </Routes>
        </storeContext.Provider>
        </inputContext.Provider>
      </searchContext.Provider>
    </>
  );
}

export default App;
