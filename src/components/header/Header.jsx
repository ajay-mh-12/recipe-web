import { React } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./search";
import ResultPage from "./ResultPage/ResultPage";
import HeaderMain from "./HeaderMain/HeaderMain";
useNavigate;
function Header() {
  const navigator = useNavigate();
  return (
    <>
    <div>
      <HeaderMain/>
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
export default Header