import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddHotelForm = ({ onHotelAdded }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('');
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !address || !email || !phone || !price || !currency) {
      setError('Tous les champs sont requis.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('price', price);
    formData.append('currency', currency);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:5000/api/hotels/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Hotel added successfully:', result);
        handleClose();
        if (onHotelAdded) {
          onHotelAdded();
        }
      } else {
        const errorData = await response.json();
        console.error('Failed to add hotel:', errorData.message);
      }
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
  };

  return (
    <div>
      <FontAwesomeIcon icon={faPlus} />
      <button onClick={handleOpen} className="mr-4 mb-2">Créer un nouveau hôtel</button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-70 p-4 md:p-8">
          <div className="w-full max-w-xl mx-auto bg-white shadow-md rounded-xl">
            <div className="flex justify-between p-4 border-b border-gray-200">
              <h3>CREER UN NOUVEAU HÔTEL</h3>
              <button onClick={handleClose} className="ml-auto">
                <span>Fermer</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nom de l'hôtel</label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Donner un nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Adresse</label>
                  <input
                    type="text"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Donner l'adresse"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="nom@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Numéro de téléphone</label>
                  <input
                    type="text"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Donner votre numéro"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Prix par nuit</label>
                  <input
                    type="number"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Prix"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900">Devise</label>
                  <select
                    id="currency"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    required
                  >
                    <option value="">Sélectionnez une devise</option>
                    <option value="XOF">F XOF</option>
                    <option value="EUR">Euro</option>
                    <option value="USD">Dollar</option>
                  </select>
                </div>
              </div>
              <div className="col-span-2">
                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Ajouter une photo</label>
                <input
                  type="file"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
              <button type="submit" className="mt-4 bg-gray-700 rounded-md text-white w-full p-2.5">Enregistrer</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddHotelForm;
