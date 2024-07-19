import React from 'react'
import { Outlet } from 'react-router'
import Carree from './Carree.png'
import foctor from './foctor (1).png'
import voctor from './voctor.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import { faP } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import a0 from './a0.png'
import { fa3 } from '@fortawesome/free-solid-svg-icons'
import white from './white.png'
import point from './point.png'
import logout from './logout.png'


export const Dashboard = () => {
  return (
     <div class="flex min-h-screen bg-gray-100 ">
      <div class=" flex-shrink-0 w-64 bg-gray-800  text-white  px-4">
            
        <div className=' flex items-center text-fold-white   mt-2 text-xl '>
        <img alt='' src={voctor} className=''></img>
        <h3 class="gap-2 py-2 px-3">RED PRODUCT</h3>
        </div>
            
        <nav class="mt-5">
          <h4 class="">Principal</h4>
          <div className=' gap-2 flex items-center block py-2 px-2 flex items-center gap-2 flex-row-center mt-5 text-fold-white hover:bg-white text-white hover:text-black w-full'>
          <img alt='' src={Carree} className=' '></img>
            <a href="/Dashboard" class="">Dashboard</a>
          </div>
          <div className=' flex items-center gap-2 flex-row-center mt-5 text-fold-white hover:bg-white text-white hover:text-black'>
          <img alt='' src={foctor} className=' '></img>
          <a href="/ListeHotels" class="block py-2 px-2 ">Liste de hôtels</a>
          </div>
          
        </nav>
       
        <div className='mt-64  object-bottom'>
          <div className=' items-center'>
            <div className=' flex w-full gap-0.5 pt-2 border-t border-neutral-700'>
              <img alt='' src={a0} className='w-15 h-15 ml-2'></img>
              <p className='ml-3 '>Mouhamet Badiane</p>
            </div>
            <div className='flex items-center'>
              <img alt='' src={point} className='w-4 h-4 ml-14 '></img>
              <p className='ml-2 font-light text-slate-500'>en ligne</p>
            </div>
           

          </div>
          
        </div>
  
        
        
      </div>
      <div class="flex-grow w-full block ">
        <div className='flex justify-between items-center text-2x text-black font-bold mb-1 bg-white h-10 pl-5'>
          <h2 class="">Dashboard</h2>
          <div className='flex items-center'>
            <div className=' shadow-md rounded-md border-inherit px-3 '>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{"--fa-primary-color": "#dde7f9", "--fa-secondary-color": "#dde7f9",}} />
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
        
        <div className=" text-black mb-1 bg-white h-16 pl-5">
          <h1 className=' font-light text-2xl text-black '>Bienvenue sur RED Product</h1>
          <p className='text-slate-500 text-xs font-light'>lorem ipsum dolor amet consecteur</p>
        </div>
        
        <div class="pl-5 pr-5 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div class="bg-white shadow-md rounded-md px-4 py-5">
              <div className='flex'>
                <div className=" rounded-full h-12 w-12 flex items-center justify-center bg-violet-400  flex " >
                  <FontAwesomeIcon icon={faEnvelopeOpen} style={{color: "#f9fafb",}} />                  
                </div >
                <div className=' items-center'>
                  <strong className='ml-3 text-xl text-gray-700 font-light'>125</strong>
                  <span className='ml-2 text-sm text-gray-500 font-light'>Formulaire</span>
                  <p className='ml-3 text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>

                </div>
              </div>
            </div>
            
          <div class="bg-white shadow-md rounded px-4 py-5">
            <div className='flex'>
              <div className=" rounded-full h-12 w-12 flex items-center justify-center bg-emerald-400  flex " >
                <FontAwesomeIcon icon={faP} style={{color: "#f7f9fd",}} />
              </div >
              <div className=' items-center '>
                <strong className='ml-3 text-xl text-gray-700 font-light'>40</strong>
                <span className='ml-3 text-sm text-gray-500 font-light'>Messages</span>
                <p className='ml-3 text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>
              </div>
                
            </div>
          </div>
          <div class="bg-white shadow-md rounded px-4 py-5 hidden md:block">
            <div className='flex'>
              <div className=" rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400  flex " >
                <FontAwesomeIcon icon={faUserGroup} style={{color: "#f6f7f9",}} />                 
              </div >
                <div className=' items-center'>
                  <strong className='ml-3 text-xl text-gray-700 font-light'>600</strong>
                  <span className='ml-2 text-sm text-gray-500 font-light'>Utilisateurs</span>
                  <p className='ml-3 text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>

                </div>
            </div>
          </div>
        </div>

        <div class="pl-5 pr-5 py-5  grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div class="bg-white shadow-md rounded-md px-4 py-5">
              <div className='flex'>
                <div className=" rounded-full h-12 w-12 flex items-center justify-center bg-red-500  flex " >
                  <FontAwesomeIcon icon={faEnvelopeOpen} style={{color: "#f9fafb",}} />                  
                </div >
                <div className=' items-center'>
                  <strong className='ml-3 text-xl text-gray-700 font-light'>25</strong>
                  <span className='ml-2 text-sm text-gray-500 font-light'>E-mails</span>
                  <p className='ml-3 text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>

                </div>
              </div>
            </div>
            
          <div class="bg-white shadow-md rounded px-4 py-5">
            <div className='flex'>
              <div className=" rounded-full h-12 w-12 flex items-center justify-center bg-fuchsia-700  flex " >
                <FontAwesomeIcon icon={faP} style={{color: "#f7f9fd",}} />
              </div >
              <div className=' items-center'>
                <strong className='ml-3 text-xl text-gray-700 font-light'>40</strong>
                <span className='ml-3 text-sm text-gray-500 font-light'>Hôtels</span>
                <p className='ml-3 text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>
              </div>
                
            </div>
          </div>
          <div class="bg-white shadow-md rounded px-4 py-5">
            <div className='flex'>
              <div className=" rounded-full h-12 w-12 flex items-center justify-center bg-indigo-600  flex " >
                <FontAwesomeIcon icon={faUserGroup} style={{color: "#f6f7f9",}} />                 
              </div >
                <div className=' items-center'>
                  <strong className='ml-3 text-xl text-gray-700 font-light'>02</strong>
                  <span className='ml-2 text-sm text-gray-500 font-light'>Entités</span>
                  <p className='ml-3 text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>

                </div>
            </div>
          </div>
        </div>
        
        

      </div>
       
      

      <div><Outlet /></div>
    </div>
  )
}
