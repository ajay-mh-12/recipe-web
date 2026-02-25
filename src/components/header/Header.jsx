import { React } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./search";
import ResultPage from "./ResultPage/ResultPage";
useNavigate;
function Header() {
  const navigator = useNavigate();
  return (
    <>
      <div className="flex justify-between p-5 bg-[#972e56] sticky top-0 z-10 ">
        <h2 className="font-semibold">Recipe Checker</h2>
        <nav>
          <ul className="flex gap-3 font-normal">
            <li onClick={() => navigator("/")}>Home</li>
            <li>favorite</li>
          </ul>
        </nav>
      </div>
      <div className=" flex-col  w-full h-screen">
        <div className="flex justify-center my-4">
           <Search /> 
        </div>
        <div className="flex justify-center my-5">
          <h1 className="font-bold">Your Search Results:</h1>
        </div>
        <div>
          <ResultPage />
        </div>
      </div>
    </>
  );
}

export default Header;
