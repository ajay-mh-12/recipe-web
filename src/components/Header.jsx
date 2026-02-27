import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import ResultPage from "./ResultPage";
import HeaderMain from "./HeaderMain/HeaderMain";
useNavigate;
function Header() {
  return (
    <>
      <div className="sticky top-0 z-100">
        <HeaderMain />
      </div>
      <div className=" flex-col  w-full h-screen">
        <div className="flex justify-center my-4">
          <Search />
        </div>
        <div className="flex justify-center my-5">
          {/* <h1 className="font-bold">Your Search Results:</h1> */}
        </div>
        <div>
          <ResultPage />
        </div>
      </div>
    </>
  );
}
export default Header;
