import { useNavigate } from 'react-router-dom';
function HeaderMain() {
    const navigate = useNavigate()
    return (
        <>
        <div className="flex justify-between p-5 bg-[#b22235]  ">
        <h2 className="font-semibold">Recipe Checker</h2>
        <nav>
          <ul className="flex gap-3 font-normal z-50">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={()=>navigate('/favorite')}>favorite</li>
          </ul>
        </nav>
      </div>
            
        </>
    );
}

export default HeaderMain;