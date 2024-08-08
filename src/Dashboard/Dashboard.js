import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faP } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';


export const Dashboard = () => {
  return (

  
    <div className='dashboard '>

      <div className="flex  ">

        <div className=" flex-col w-full h-[100%] ">
         
       
          <div className=' dashboard h-[100%]'>
            <div className="text-black mb-1 bg-white h-16 pl-5">
              <h1 className='font-light text-2xl text-black'>Bienvenue sur RED Product</h1>
              <p className='text-slate-500 text-xs font-light'>lorem ipsum dolor amet consecteur</p>
            </div>
            <div className="pl-5 pr-5 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white shadow-md rounded-md px-4 py-5">
                <div className='flex'>
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-violet-400">
                    <FontAwesomeIcon icon={faEnvelopeOpen} style={{ color: "#f9fafb" }} />
                  </div>
                  <div className='ml-3'>
                    <strong className='text-xl text-gray-700 font-light'>125</strong>
                    <span className='ml-2 text-sm text-gray-500 font-light'>Formulaire</span>
                    <p className='text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md rounded px-4 py-5">
                <div className='flex'>
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-emerald-400">
                    <FontAwesomeIcon icon={faP} style={{ color: "#f7f9fd" }} />
                  </div>
                  <div className='ml-3'>
                    <strong className='text-xl text-gray-700 font-light'>40</strong>
                    <span className='ml-2 text-sm text-gray-500 font-light'>Messages</span>
                    <p className='text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md rounded px-4 py-5 hidden md:block">
                <div className='flex'>
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                    <FontAwesomeIcon icon={faUserGroup} style={{ color: "#f6f7f9" }} />
                  </div>
                  <div className='ml-3'>
                    <strong className='text-xl text-gray-700 font-light'>600</strong>
                    <span className='ml-2 text-sm text-gray-500 font-light'>Utilisateurs</span>
                    <p className='text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-5 pr-5 py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white shadow-md rounded-md px-4 py-5">
                <div className='flex'>
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500">
                    <FontAwesomeIcon icon={faEnvelopeOpen} style={{ color: "#f9fafb" }} />
                  </div>
                  <div className='ml-3'>
                    <strong className='text-xl text-gray-700 font-light'>25</strong>
                    <span className='ml-2 text-sm text-gray-500 font-light'>E-mails</span>
                    <p className='text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md rounded px-4 py-5">
                <div className='flex'>
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-fuchsia-700">
                    <FontAwesomeIcon icon={faP} style={{ color: "#f7f9fd" }} />
                  </div>
                  <div className='ml-3'>
                    <strong className='text-xl text-gray-700 font-light'>40</strong>
                    <span className='ml-2 text-sm text-gray-500 font-light'>Hôtels</span>
                    <p className='text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md rounded px-4 py-5">
                <div className='flex'>
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-indigo-600">
                    <FontAwesomeIcon icon={faUserGroup} style={{ color: "#f6f7f9" }} />
                  </div>
                  <div className='ml-3'>
                    <strong className='text-xl text-gray-700 font-light'>02</strong>
                    <span className='ml-2 text-sm text-gray-500 font-light'>Entités</span>
                    <p className='text-sm text-gray-500 font-light'>je ne sais pas quoi mettre</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
 
  )
}
