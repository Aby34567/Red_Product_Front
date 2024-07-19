import React from 'react'

export const Modal = () => {
  return (
    <div></div>
  )
}

//<div className=" text-black  bg-white h-14 pl-5id=  "  >
//           <div className='flex justify-between items-center'>
//             <h1 className=' font-light text-2xl text-black flex items-center'>Hôtels <p className='ml-3 mt-1 text-slate-500 text-xl font-light'>8</p> </h1>
//             <div className=' ml-2 border shadow-md rounded-md h-9 mr-4'>

//               <div className=''>
            
//                 <Fragment>
//                 <FontAwesomeIcon icon={faPlus} />
                
                
//                 <button onClick={handleOpen} className='mr-4'>Créer un nouveau hôtel</button>
//                  {isOpen && (
//                   <div className="fixed inset-0 z-50 h bg-gray-500 bg-opacity-70 p-4 md:p-8 ">
//                     <div className="w-full max-w-xl mx-auto bg-white shadow-md rounded-xl ">
//                         <div className="flex justify-start p-4 border-b border-gray-200">
//                           <h3>CREER UN NOUVEAU HÔTEL</h3>
//                           <a href='/ListeHotels' className='ml-auto'>
//                           <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
//                             <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                             </svg>
//                             <span class="sr-only">Close modal</span>
//                           </button>
//                           </a>
//                         </div>
                        
//                         <div class="grid gap-4 mb-4 grid-cols-2">
//                           <div class="col-span-2 sm:col-span-1 ">
//                             <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white px-4">Nom de l'hôtel</label>
//                             <input type="text" name="text" id="text" class="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm 
//                             rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500  
//                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 " placeholder="Donner un nom" required="">
//                               </input>
//                           </div>
                      
//                           <div class=" sm:col-span-1">
//                           <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse</label>
//                           <input type="text" name="text" id="text" class=" mr-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm 
//                             rounded-lg focus:ring-primary-600 focus:border-primary-600  w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500  
//                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 " placeholder="Donner l'adresse" required="">
//                           </input>
//                           </div>
//                         </div>
                        
//                         <div class="grid gap-4 mb-4 grid-cols-2">
//                           <div class="col-span-2 sm:col-span-1 ">
//                             <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white px-4">E-mail</label>
//                             <input type="email" name="email" id="email" class="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm 
//                             rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500  
//                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 " placeholder="nom@gmail.com" required="">
//                               </input>
//                           </div>
                      
//                           <div class=" sm:col-span-1">
//                           <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numéro de téléphone</label>
//                           <input type="number" name="number" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
//                             rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500  
//                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 " placeholder="Donner votre numéro" required="">
//                           </input>
//                           </div>
//                         </div>

//                         <div class="grid gap-4 mb-4 grid-cols-2">
//                           <div class="col-span-2 sm:col-span-1">
//                           <label for="price" class="ml-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix par nuit</label>
//                           <input type="number" name="price" id="price" class="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
//                           focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 
//                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="prix" required="">
//                           </input>
//                           </div>
//                           <div class="col-span-2 sm:col-span-1">
//                             <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Devise</label>
//                             <select id="devise" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
//                               <option selected="">Selectez un devise</option>
//                               <option value="TV">F XOF</option>
//                               <option value="PC">Euro</option>
//                               <option value="GA">Dollar</option>
//                             </select>
//                           </div>
//                         </div>
                        
//                         <div class="col-span-2">
//                           <label for="description" class="ml-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ajouter une photo</label>
//                           <div class="flex flex-col">

//                           <input type="file" id="image-upload" name="image" accept="image/*" class="ml-4 mr-4 w-auto h-20 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
//                             </input>
//                         </div>
//                         </div>

//                         <div className='ml-auto flex items-center '>
//                           <button  onClick={handleClose} type="submit" class="mr-4 mt-4 mb-4 bg-gray-700 rounded-md text-white ml-auto w-17">
//                             <svg class=" -ms-1  h-2"  ><path fill-rule="evenodd"clip-rule="evenodd"></path></svg>
//                             Enregistrer
//                           </button>
//                         </div>
                        

//                       </div>
//                     </div>
                
//                 )}
//                 </Fragment>
          
//               </div>

            
//             </div>
            
//           </div>
            
        
//         </div>

 

   
        


  
