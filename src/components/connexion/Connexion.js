import './Form.css';
import React, { useState } from 'react';
import vector from './vector.png';
import { useNavigate } from 'react-router-dom';


const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      navigate('/dashboard'); // Redirection après connexion réussie
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className=" mt-20  gap-2 px-1  mx-auto w-[40%]  max-lg:w-[60%] max-md:w-[80%]">
      <div className=" flex justify-center items-center gap-2 px-1  w-full">
        <img alt="" src={vector} className="w-3 " />
        <h1 className="font-bold">RED PRODUCT</h1>
      </div>
      <div className="bg-white pb-2 mx-auto  " >
        <div className="mt-10 text-align: left;">
          <div className="mt-5 text-align: left; ml-2.5">
            <div>
              <div>
                <form onSubmit={handleSubmit} action="border-inherit">
                  <p>Connectez-vous en tant que Admin</p>
                  <div className="border-inherit">
                    <div className="input-box mt-3">
                      <input
                        type="email"
                        className="mt-3 w-full border-b-2"
                        placeholder="E-mail"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="input-box mt-3">
                      <input
                        type="password"
                        className="mt-3 w-full border-b-2"
                        placeholder="Mot de passe"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="remember-forgot mt-2">
                      <label>
                        <input type="checkbox" className="mt-3 w-8 h-4" />
                        Gardez-moi connecté
                      </label>
                    </div>
                  </div>
                  <div className="mt-3 border bg-black 500 text-center ml-10 w-[80%] h-8">
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
      <div className="text-center text-yellow-300">
        <a href="/PasseOublie">Mot de passe oublié?</a>
      </div>
      <p className="text-center text-white">
        Vous n'avez pas de compte? <a href="/LoginForm" className="text-yellow-300">S'inscrire</a>
      </p>
    </div>
  );
};

export default Connexion;
