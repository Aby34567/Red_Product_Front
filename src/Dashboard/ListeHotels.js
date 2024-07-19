import React, { useEffect, useState, Fragment } from 'react';
import { Outlet } from 'react-router';
import Carree from './Carree.png';
import foctor from './foctor (1).png';
import voctor from './voctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import a0 from './a0.png';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import white from './white.png';
import point from './point.png';
import logout from './logout.png';
// import unnamed from '../Dashboard/unnamed';
// import image2 from '../images/image2.png';
// import image3 from '../images/image3.png';
// import image4 from '../images/image4.png';
// import image5 from '../images/image5.png';
// import image6 from '../images/image6.png';
// import image7 from '../images/image7.png';
// import image8 from '../images/image8.png';
import { Modal } from './Modal';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import AddHotelForm from './AddHotelForm';



export const ListeHotels = () => {
  const [hotels, setHotels,fetchHotels] = useState([]); // Corrected initialization

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
  }, [setHotels]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-shrink-0 w-64 bg-gray-800 text-white px-4">
        <div className="flex items-center text-fold-white mt-2 text-xl">
          <img alt="" src={voctor} className=""></img>
          <h1 className="gap-2 py-2 px-3">RED PRODUCT</h1>
        </div>

        <nav className="mt-5">
          <h2 className="">Principal</h2>
          <div className="gap-2 flex items-center block py-2 px-2 flex items-center gap-2 flex-row-center mt-5 text-fold-white hover:bg-white text-white hover:text-black w-full">
            <img alt="" src={Carree} className=""></img>
            <a href="/Dashboard" className="">Dashboard</a>
          </div>
          <div className="flex items-center gap-2 flex-row-center mt-5 text-fold-white hover:bg-white text-white hover:text-black">
            <img alt="" src={foctor} className=""></img>
            <a href="/ListeHotels" className="block py-2 px-2">Liste de hôtels</a>
          </div>
        </nav>

        <div className="mt-64 object-bottom">
          <div className="items-center">
            <div className="flex w-full gap-0.5 pt-2 border-t border-neutral-700">
              <img alt="" src={a0} className="w-15 h-15 ml-2"></img>
              <p className="ml-3">Mouhamet Badiane</p>
            </div>
            <div className="flex items-center">
              <img alt="" src={point} className="w-4 h-4 ml-14"></img>
              <p className="ml-2 font-light text-slate-500">en ligne</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow w-full">
        <div className="flex justify-between items-center text-2x text-black font-bold mb-0.5 bg-white h-10 pl-5">
          <h2 className="">Liste des hôtels</h2>
          <div className="flex items-center">
            <div className="shadow-md rounded-md border-inherit px-3">
              <input type="text" placeholder="Recherche" className="text-sm" />
            </div>
            <div className="rounded-full h-4 w-4 flex items-center justify-center bg-yellow-400 flex">
              <FontAwesomeIcon icon={faBell} className="ml-2" />
              <FontAwesomeIcon icon={fa3} style={{ "--fa-primary-color": "#f7f9fc", "--fa-secondary-color": "#f7f9fc" }} />
            </div>
            <div className="flex items-center overflow-visible">
              <img alt="" src={a0} className="w-6 h-6 ml-2"></img>
              <img alt="" src={white}></img>
            </div>
            <a href="Connexion">
              <img alt="" src={logout}></img>
            </a>
          </div>
        </div>

        <div className="text-black bg-white h-14 pl-5">
          <div className="flex justify-between items-center">
            <h1 className="font-light text-2xl text-black flex items-center">
              Hôtels <p className="ml-3 mt-1 text-slate-500 text-xl font-light">8</p>
            </h1>
            <div className="ml-2 border shadow-md rounded-md h-9 mr-4">
              <div className="">
                <Fragment>
                  <AddHotelForm onHotelAdded={fetchHotels} />

                  {/* <ul>
                    {hotels.map(hotel => (
                      <li key={hotel._id}>
                        <h3>{hotel.name}</h3>
                        <p>{hotel.address}</p>
                        <p>{hotel.email}</p>
                        <p>{hotel.phone}</p>
                        <p>{hotel.price} {hotel.currency}</p>
                        {hotel.image && <img src={`http://localhost:5000/uploads/${hotel.image}`} alt={hotel.name} />}
                      </li>
                    ))}
                  </ul> */}
                </Fragment>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-5 pr-5 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {hotels.map(hotel => (
            <div key={hotel._id} className="shadow-lg rounded-md">
              <div className="rounded-full overflow-hidden">
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



          {/* <div className="shadow-lg rounded-md">
            <div className="">
              <div className="">
                <img alt="" src={image2}></img>
              </div>
              <div className="items-center mt-2">
                <span className="ml-2 text-xs text-orange-800 font-light flex items-center">Rte des Almadies, Dakar</span>
                <strong className="ml-3 text-xm text-gray-700 font-light">King Fahd Palace</strong>
                <p className="ml-3 text-sm text-gray-500 font-light">20.000 XOF par nuit</p>
              </div>
            </div>
          </div> */}

          {/* <div className="shadow-lg rounded-md">
            <div className="">
              <div className="">
                <img alt="" src={image3}></img>
              </div>
              <div className="items-center mt-2">
                <span className="ml-2 text-xs text-orange-800 font-light flex items-center">Rte de la Corniche O, Dakar 16868</span>
                <strong className="ml-3 text-xm text-gray-700 font-light">Radisson Blu Hotel</strong>
                <p className="ml-3 text-sm text-gray-500 font-light">22.000 XOF par nuit</p>
              </div>
            </div>
          </div> */}

          {/* <div className="shadow-lg rounded-md">
            <div className="">
              <div className="">
                <img alt="" src={image4}></img>
              </div>
              <div className="items-center mt-2">
                <span className="ml-2 text-xs text-orange-800 font-light flex items-center">Place de l'independance, 10 Rue PL 29, Dakar</span>
                <strong className="ml-3 text-xm text-gray-700 font-light">Pullman Dakar Teranga</strong>
                <p className="ml-3 text-sm text-gray-500 font-light">30.000 XOF par nuit</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="pl-5 pr-5 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="shadow-lg rounded-md">
            <div className="rounded-full">
              <img alt="" src={image5}></img>
            </div>
            <div className="items-center mt-2">
              <span className="ml-2 text-xs text-orange-800 font-light flex items-center">Lac Rose, Dakar</span>
              <strong className="ml-3 text-xm text-gray-700 font-light">Hôtel Lac Rose</strong>
              <p className="ml-3 text-sm text-gray-500">25.000 XOF par nuit</p>
            </div>
          </div> */}

          {/* <div className="shadow-lg rounded-md">
            <div className="">
              <div className="">
                <img alt="" src={image6}></img>
              </div>
              <div className="items-center mt-2">
                <span className="ml-2 text-xs text-orange-800 font-light flex items-center">Mbour, Sénégal</span>
                <strong className="ml-3 text-xm text-gray-700 font-light">Hôtel Saly</strong>
                <p className="ml-3 text-sm text-gray-500 font-light">20.000 XOF par nuit</p>
              </div>
            </div>
          </div> */}

          {/* <div className="shadow-lg rounded-md">
            <div className="">
              <div className="">
                <img alt="" src={image7}></img>
              </div>
              <div className="items-center mt-2">
                <span className="ml-2 text-xs text-orange-800 font-light flex items-center">BP64, Saly, 23000</span>
                <strong className="ml-3 text-xm text-gray-700 font-light not-italic">Palm Beach Resort & Spa</strong>
                <p className="ml-3 text-sm text-gray-500 font-light">22.000 XOF par nuit</p>
              </div>
            </div>
          </div> */}

          {/* <div className="shadow-lg rounded-md">
            <div className="">
              <div className="">
                <img alt="" src={image8}></img>
              </div>
              <div className="items-center mt-2">
                <span className="ml-2 text-xs text-orange-800 font-light flex items-center">Place de l'independance, 10 Rue PL 29, Dakar</span>
                <strong className="ml-3 text-xm text-gray-700 font-light">Pullman Dakar Teranga</strong>
                <p className="ml-3 text-sm text-gray-500 font-light">30.000 XOF par jour</p>
              </div>
            </div>
          </div>
        </div> */}

        <div><Outlet /></div>
        <Modal />
      </div>
    </div>
  );
};


