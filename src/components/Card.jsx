import { NavLink } from 'react-router-dom';



function Card({ product }) {

  return (
    <>
      <NavLink className='flex justify-center' to={`/`} key={id}>
        <div className=" w-[90%] mt-2 sm:mt-6 sm:w-[14rem] bg-gray-300 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-400 ease-in rounded-sm h-auto hover:scale-110 transition-transform duration-300 " >
          <img src={image} className="rounded-sm " alt={name} />
          <div className="px-4 mt-2 mb-4 flex justify-around items-center">
            <p className=" font-bold">{name}</p>  
          </div>
        </div>
      </NavLink>
    </>
  )

}

export default Card