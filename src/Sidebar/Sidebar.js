import React from 'react'
import Carree from '../Dashboard/Carree.png'
import foctor from '../Dashboard/foctor (1).png'
import voctor from '../Dashboard/voctor.png'
import point from '../Dashboard/point.png'
import a0 from '../Dashboard/a0.png'
//            



export const Sidebar = () => {
    return (
      
      
        <div class="flex min-h-screen bg-gray-100 ">
            
            <div className=" w-64 bg-gray-800 text-white px-4 md:w-48 lg:w-64">

            <header className='header'>
            <div className='menu-icon'>
                    {/* <BsJustify className='icon' onClick={togglSidebar}/> */}
                </div>
            <div className=' flex items-center text-fold-white   mt-2 text-xl '>
                <img alt='' src={voctor} className=''></img>
                <h3 class="gap-2 py-2 px-3">RED PRODUCT</h3>
                
                </div>
                
            </header>
                
                    
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
        </div>
     
         
      
       
    )
}



