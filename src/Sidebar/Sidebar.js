// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Carree from '../Dashboard/Carree.png';
// import foctor from '../Dashboard/foctor (1).png';
// import voctor from '../Dashboard/voctor.png';
// import point from '../Dashboard/point.png';
// import inconnu from '../Dashboard/inconnu.jpeg';

// export const Sidebar = () => {
//   const [isCollapsed] = useState(false);
//   const userName = localStorage.getItem("users");

  

//   return (
//     <div className=" sidebar flex h-screen h-full  w-full ">
//       <div className={`bg-gray-800 text-white px-4 transition-all duration-300`}>
        

//         <header className='header'>
//           <div className='flex items-center mt-2 text-xl'>
//             <img alt='' src={voctor} className=' sidebar-icon w-5 ' />
//             {!isCollapsed && <h3 className="sidebar-text gap-2 py-2 px-3 items-center max-sm:hidden">RED PRODUCT</h3>}
//           </div>
//         </header>

//         <nav className="mt-5 ">
//           <h4 className='sidebar-text max-sm:hidden'>Principal</h4>
//           <div className='flex items-center gap-2 py-2 px-2 mt-5 text-white hover:bg-white hover:text-black'>
//             <img alt='' src={Carree} className='sidebar-icon'/>
//             { <Link to="/template/dashboard" className="max-sm:hidden">Dashboard</Link>}
//           </div>
//           <div className='flex items-center gap-2 py-2 px-2 mt-5 text-white hover:bg-white hover:text-black'>
//             <img alt='' src={foctor} className='sidebar-icon'/>
//             {<Link to="/template/listeHotels" className="">Liste de hôtels</Link>}
//           </div>
//         </nav>

//         <div className='mt-60 fixed'>
//           <div className='flex items-center w-full gap-0.5 pt-2 border-t border-neutral-700'>
//             <img alt='' src={inconnu} className='w-8 h-8 ' />
//             { <p className='ml-3 max-sm:hidden'>{userName}</p>}
//           </div>
//           <div className='flex items-center max-sm:hidden '>
//             <img alt='' src={point} className=' sidebar-icon w-4 h-4 ml-14' />
//             {<p className=' sidebar-text ml-2 font-light text-slate-500 '>en ligne</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from 'react';
import {
    FaTh,
    // FaBars,
    // FaUserAlt,
    // FaRegChartBar,
    // FaCommentAlt,
    // FaShoppingBag,
    // FaThList
}from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import voctor from '../Dashboard/voctor.png';
import point from '../Dashboard/point.png';
import inconnu from '../Dashboard/inconnu.jpeg';


export const Sidebar = ({children}) => {
    const[isOpen ] = useState(false);
    const userName = localStorage.getItem("users");
    
    const menuItem=[
        {
            path:"/template/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/template/listeHotels",
            name:"Liste des Hôtels",
            icon:<RiComputerFill/>
        },
        // {
        //     path:"/analytics",
        //     name:"Analytics",
        //     icon:<FaRegChartBar/>
        // },
        // {
        //     path:"/comment",
        //     name:"Comment",
        //     icon:<FaCommentAlt/>
        // },
        // {
        //     path:"/product",
        //     name:"Product",
        //     icon:<FaShoppingBag/>
        // },
        // {
        //     path:"/productList",
        //     name:"Product List",
        //     icon:<FaThList/>
        // }
    ]
    return (
      <div className="container  flex bg-gray-600 text-white  transition-all duration-300 h-[100vh]">
        <div style={{width: isOpen ? "200px" : "200px"}} className="">
          <div className="flex">
          <img alt='' src={voctor} className=' sidebar-icon w-5 mt-3 h-5' />
            <h1 className="max-sm:hidden gap-2 py-2 px-3 text-xl font-bold">Red Product</h1>
              <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="flex ml-50px">
                {/* <FaBars onClick={toggle}/> */}
              </div>
          </div>
                <h1 className='px-2' >Principal</h1>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="flex items-center gap-2 py-2 px-2 mt-5 text-white hover:bg-white hover:text-black" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div className=" max-sm:hidden">{item.name}</div>
                       </NavLink>
                   ))
               }
              

           </div>

           <div className='mt-[500px] fixed'>
                <div className='flex items-center w-full gap-0.5 pt-2 border-t border-neutral-700 px-3'>
                    <img alt='' src={inconnu} className='w-8 h-8 ' />
                    { <p className='ml-3 max-sm:hidden'>{userName}</p>}
                </div>
                <div className='flex items-center max-sm:hidden '>
                    <img alt='' src={point} className=' sidebar-icon w-4 h-4 ml-14' />
                    {<p className=' sidebar-text ml-2 font-light text-slate-500 '>en ligne</p>}
                </div>
            </div>
           
           <main>{children}</main>
        </div>


          
    );
    
};


// export default Sidebar;