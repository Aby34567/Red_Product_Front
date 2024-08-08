import React, { useState, useEffect } from 'react'
import { fa3 } from '@fortawesome/free-solid-svg-icons'
import logout from './logout.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoIosNotifications } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { BsSearch } from 'react-icons/bs'
import inconnu from './inconnu.jpeg'
// import { FaBars } from 'react-icons/fa'


export const Navbar = ({sidebarToggle, setSidebarToggle}) => {

    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(false);
    const [currentPage, setCurrentPage] = useState("");
    // const navigate = useNavigate();
  
    // Vérifier si l'utilisateur est connecté
    // useEffect(() => {
    //   const user = JSON.parse(localStorage.getItem("hotelUser"));
    //   if (!user) {
    //     navigate("/connexion");
    //   }
    // }, []);
  
    // Fonction pour basculer l'état showNavbar
     // eslint-disable-next-line no-unused-vars
     const handleToggleNavbar = () => {
      setShowNavbar(!showNavbar);
     };
  
    // const handleLogout = () => {
    //   localStorage.removeItem("hotelUser");
    //   navigate("/connexion");
    // };
  
    // Masquer le menu par défaut en dessous de 600px
    useEffect(() => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 720) {
        setShowNavbar(false);
      }
    }, [setShowNavbar]);

    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth < 720) {
            setShowNavbar(false);
          } else {
            setShowNavbar(true);
          }
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [setShowNavbar]);
    
      useEffect(() => {
        setCurrentPage(location.pathname);
      }, [location.pathname]);
    
      const getPageTitle = () => {
        switch (currentPage) {
          case "/template/dashboard":
            return "Dashboard";
          case "/template/listeHotels":
            return "Liste des hôtels";
          default:
            return "Dashboard";
        }
      };

  return (
    <main className="">
      <nav className=''>



        <div className='flex  items-center text-2x text-black font-bold mb-1 bg-white h-14 max-sm:h-20 max-sm:items-start border-b-gray-100 max-sm:flex-wrap'>
          <div className='max-lg:flex hidden max-lg:w-1/2'>
            <button
              className="AffichBtn  text-opacity-30 mb-8  "
              onClick={handleToggleNavbar}
              >
              <IoMenu className="text-3xl text-grayo  max-lg:flex hidden" />

            </button>
          </div>
        
          <h2 className='max-sm:text-xs max-sm:mb-2'>{getPageTitle()}</h2>
          <div className={`flex items-center justify-end w-4/6    ${
            showNavbar ? "flex" : "max-md:hidden" }`}>

            <div className='flex justify-end ml-auto  gap-2  max-sm:w-2/3 absolute max-sm:mb-6'>
              <div className="flex items-center h-8 px-2 border-2 border-gray-300 rounded-2xl w-3/6 max-sm:w-2/3">
                <BsSearch className='icon' />
                <input
                  type="search"
                  name="Search"
                  id="Search"
                  className="border-none focus:outline-none h-8 bg-transparent pb-1 text-gray-500"
                  placeholder="Recherche"
                />
              </div>
              <IoIosNotifications/>
              <div className='rounded-full h-4 w-4 bg-yellow-400 flex items-center '>
                <FontAwesomeIcon icon={fa3} style={{"--fa-primary-color": "#f7f9fc", "--fa-secondary-color": "#f7f9fc"}} />
              </div>
              <div className='flex items-center gap-2'>
                <img alt='' src={inconnu} className='w-6 h-6 rounded-full' />
                <a href='/connexion'>
                  <img alt='' src={logout} className='w-6 h-6 ' />
                </a>
              </div>
            </div>
          </div>
          
        


  
    

          

        </div>





   
    

    




      </nav>

    </main>
    
  )
}
