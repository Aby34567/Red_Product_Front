import React from 'react'
import vactor from './vactor.png';

export const PasseOublie = () => {
  return (
   
    <div className='bgColor'>

    <div >
        <div className=" pt-20 flex items-center justify-center gap-2 px-1 mx-auto w-[40%]  max-lg:w-[60%] max-md:w-[80%] ">
        <img alt='' src={vactor} className='  w-3  '></img>
            <h1 className='font-bold '>RED PRODUCT</h1>
        </div>
        <div className='bg-white  pb-2 w-50  text-align: left  ' id='block'>  
            <div className="mt-10 text-align: left;">
                
                <div className="mt-5 text-align: left; ml-2.5">
                
                <div className="">
                    <div className="">
                    <form action="" >
                        <p className="">Mot de passe oublié?</p>
                        <div className=''>
                            <p>Entrez votre adress e-mail ci-dessous et nous vous envoyons des instructions sur
                                la façon de modifier votre mot de passe.
                            </p>
                        </div>
                        <div className='input-box mt-3'>
                            <input type="malito " className='w-full border-b-2 py-3' placeholder='Votre e-mail' />
                        </div>
                        
                        
                        <div className=" mt-4 border bg-black 500 text-center  ml-10 mr-10 h-8  ">
                            <button type="submit" className="text-white">Envoyer</button>
                        </div>
                                
                        
                    </form>
                    </div>
                </div>
                
            
            </div>
            
        </div>

                
        </div>



        
       

        <p className='text-center text-white'>Revenir à la <a href='/' className='text-yellow-300'>connexion</a></p>
    </div>
    </div>

    
  )
}
