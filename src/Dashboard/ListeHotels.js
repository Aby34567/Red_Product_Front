import React, { useEffect, useState, Fragment } from 'react';
import { Outlet } from 'react-router';
import { Modal } from './Modal';
import AddHotelForm from './AddHotelForm';



export const ListeHotels = () => {
  const [hotels, setHotels] = useState([]); // Corrected initialization


  useEffect(() => {
    // Fonction pour récupérer les hôtels depuis l'API
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hotels');
        if (response.ok) {
          const data = await response.json();
          setHotels(data);
        } else {
          console.error('Failed to fetch hotels:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, [hotels]);
  // console.log(hotels)

  return (
    <div className=" flex  h-screen w-full mb-1">

      
       
     
      <div className="flex-grow ">
        

        <div className="text-black bg-white h-14 pl-5 max-sm:mt-12">
          <div className="flex justify-between items-center">
            <h1 className="font-light text-2xl text-black flex items-center">
              Hôtels <p className="ml-3 mt-1 text-slate-500 text-xl font-light">{hotels?.length}</p>
            </h1>
            <div className="ml-2 border shadow-md rounded-md h-9 mr-4 max-sm:w-auto flex items-center p-2">
              <div className="">
                <Fragment>
                  <AddHotelForm onHotelAdded={hotels} />

                </Fragment>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-5 pr-5 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {hotels.map(hotel => (
            <div key={hotel._id} className="shadow-lg rounded-md">
              <div className="shadow-lg rounded-md">
                {hotel.image && (
                  <img
                  alt={hotel.name}
                  src={`http://localhost:5000/uploads/${hotel.image}`}
                  className="w-full h-full object-cover"
                />
                )}
              </div>
              <div className="items-center mt-2 p-2">
                <span className="block text-xs text-orange-800 font-light">{hotel.address}</span>
                <strong className="block text-xm text-gray-700 font-light">{hotel.name}</strong>
                <p className="block text-sm text-gray-500">{hotel.price} {hotel.currency} par nuit</p>
              </div>
            </div>
          ))}
        </div>

        <div><Outlet /></div>
        <Modal />
      </div>
    </div>
  );
};


