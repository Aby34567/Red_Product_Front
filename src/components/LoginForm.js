
// export const Connexion = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/products/connexion', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (response.ok) {
//         const result = await response.json();
//         console.log(result);
//         navigate('/dashboard'); // Redirigez vers une route valide après connexion
//       } else {
//         console.error('Failed to login', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="mt-20 text-center ">
//         <h1 className='font-bold '>
//           <img alt='' src={Victor} className=' text-align-center w-3 absolute  left-1/3 '></img>
//           RED PRODUCT
//         </h1>
//       </div>
//       <div className='bg-white  pb-8 w-50  text-align: left;' id='block'>  
//         <div className="mt-10 text-align: left;">
//           <div className="mt-5 text-align: left; ml-2.5">
//             <div>
//               <form onSubmit={handleSubmit} action="border-inherit">
//                 <p className="">Connectez-vous en tant que Admin</p>
//                 <div className='border-inherit'>
//                   <div className='input-box mt-3'>
//                     <input type="text" className='py-3 w-full border-b-2' placeholder='Nom' />
//                   </div>
//                   <div className='input-box mt-3'>
//                     <input type="email" className='py-3 w-full border-b-2' placeholder='E-mail' 
//                       autoComplete='off'
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className='input-box mt-3'>
//                     <input type="password" className='w-full py-3 border-b-2' placeholder='Mot de passe' 
//                       autoComplete='off'
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <div className='remember-forgot mt-3'>
//                     <label>
//                       <input type="checkbox" className='w-8 h-4' /> Accepter les termes et la politique
//                     </label>
//                   </div>
//                 </div>
//                 <div className="mt-2 border bg-black 500 text-center ml-10 mr-10 h-8">
//                   <button type="submit" className="text-white">Se connecter</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='text-center text-yellow-300'>
//         <a href="/PasseOublie">Mot de passe oublié?</a>
//       </div>
//       <p className='text-center text-white'>
//         Vous n'avez pas de compte? <a href="/Connexion" className='text-yellow-300'>S'inscrire</a>
//       </p>
//     </div>
//   )
// }


import React, { useState } from 'react';
import Victor from './Victor.png';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Vérifier que tous les champs requis sont remplis
      if (!name || !email || !password) {
        console.error('Veuillez remplir tous les champs requis.');
        return;
      }
  
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
        credentials: 'include' // Si vous avez besoin de gérer les cookies
        
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        navigate('/connexion'); // Redirection après inscription réussie
      } else {
        const errorData = await response.json();
        console.error('Failed to register:', errorData.message);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };
  
  


  return (
    <div>
      <div className="mt-20 flex items-center justify-center gap-2 px-1 mx-auto w-[40%]  max-lg:w-[60%] max-md:w-[80%]">
        <img alt='' src={Victor} className=' w-3 ' />

        <h1 className='font-bold '>
          RED PRODUCT
        </h1>
      </div>
      <div className='bg-white pb-2 w-50 text-align: left;' id='block'>
        <div className=" text-align: left;">
          <div className="mt-5 text-align: left; ml-2.5">
            <div className="">
              <div className="">
                <form onSubmit={handleSubmit} action="border-inherit">
                  <p className="">Inscrivez-vous en tant que Admin</p>
                  <div className='border-inherit'>
                    <div className='input-box mt-3'>
                      <input type="text" className='py-3 w-full border-b-2' placeholder='Nom' 
                      autoComplete='off'
                      onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='input-box mt-3'>
                      <input type="email" className='py-3 w-full border-b-2' placeholder='E-mail'
                        autoComplete='off'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className='input-box mt-3'>
                      <input type="password" className='w-full py-3 border-b-2' placeholder='Mot de passe'
                        autoComplete='off'
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className='remember-forgot mt-3'>
                      <label>
                        <input type="checkbox" className='w-8 h-4' />
                        Accepter les termes et la politique
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 border bg-black 500 text-center ml-10  w-[80%] h-8">
                    <button type="submit" className="text-white">
                      Se connecter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center text-yellow-300'>
        <a href="/PasseOublie">Mot de passe oublié?</a>
      </div>
      <p className='text-center text-white'>
        Vous n'avez pas de compte? <a href="LoginForm" className='text-yellow-300'>S'inscrire</a>
      </p>
    </div>
  );
}
export default LoginForm;
