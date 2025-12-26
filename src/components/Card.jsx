import { NavLink } from 'react-router-dom';
import Button  from "./Button";
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react';



function Card({ title, description, btnTitle }) {
  const { isLoggedIn, setIsLoggedIn, } = useContext(AuthContext);

  return (
    <>
     <div>
      <div className='w-72 h-80 bg-slate-300 p-6 rounded-2xl flex flex-col items-center justify-between gap-1.5'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-justify'>{description}</p>
        <NavLink to={isLoggedIn ? "/loanPage" : "/login"}>
          <Button
           type='button'
           extraClass=" hover:bg-blue-400 transition-colors duration-300 w-40 mt-4"
          >
            {btnTitle}
          </ Button >
        </NavLink>
      </div>
     </div>
    </>
  )

}

export default Card