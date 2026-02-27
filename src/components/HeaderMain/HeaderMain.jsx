import { React } from 'react';
import { useNavigate } from 'react-router-dom';
function HeaderMain() {
    const navigator = useNavigate()
    return (
        <>
        <div className="flex justify-between p-5 bg-[#972e56]  ">
        <h2 className="font-semibold">Recipe Checker</h2>
        <nav>
          <ul className="flex gap-3 font-normal">
            <li onClick={() => navigator("/")}>Home</li>
            <li onClick={()=>navigator('/favorite')}>favorite</li>
          </ul>
        </nav>
      </div>
            
        </>
    );
}

export default HeaderMain;