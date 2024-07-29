import React from 'react'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import a0 from './a0.png'
import { fa3 } from '@fortawesome/free-solid-svg-icons'
import white from './white.png'
import logout from './logout.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsSearch } from 'react-icons/bs'
// import { FaBars } from 'react-icons/fa'


export const Navbar = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <main className="red">
        <nav >



   <div className='flex justify-between items-center text-2x text-black font-bold mb-1 bg-white h-10 pl-5 w-full'>
    {/* <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebarToggle(!sidebarToggle)}/> */}
    <h2 className="">Dashboard</h2>
    <div className='flex items-center'>
        <div className=' shadow-md rounded-md border-inherit flex  '>
            <BsSearch className='icon'/>
            <input type='text' placeholder='Recherche' className='text-sm' />
            
        </div>
        <FontAwesomeIcon icon={faBell} />
        <div className='rounded-full h-4 w-4 flex items-center justify-center bg-yellow-400  flex  '>
            <FontAwesomeIcon icon={fa3} style={{"--fa-primary-color": "#f7f9fc", "--fa-secondary-color": "#f7f9fc ",}} />
        </div>
        <div className='flex items-center overflow-visible'>
            
            <img alt='' src={a0} className='w-6 h-6 ml-2'></img>
            <img alt='' src={white}></img>
        </div>
        <a href='Connexion'> <img alt='' src={logout}></img></a>

    </div>
</div>

    




</nav>

    </main>
    
  )
}
