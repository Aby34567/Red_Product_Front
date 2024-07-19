// HotelCard.js
import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div className="shadow-lg rounded-md">
      <div className="rounded-full">
        <img alt={hotel.name} src={`http://localhost:5000/uploads/${hotel.image}`} />
      </div>
      <div className="items-center mt-2">
        <span className="ml-2 text-xs text-orange-800 font-light flex items-center">{hotel.address}</span>
        <strong className="ml-3 text-xm text-gray-700 font-light">{hotel.name}</strong>
        <p className="ml-3 text-sm text-gray-500">{hotel.price} {hotel.currency} par nuit</p>
      </div>
    </div>
  );
};

export default HotelCard;
