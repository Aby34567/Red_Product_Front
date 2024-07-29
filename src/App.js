import LoginForm from "./components/LoginForm"
import "./App.css";
import Connexion from "./components/connexion/Connexion";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { PasseOublie } from "./components/PasseOublie";

import {Dashboard } from './Dashboard/Dashboard';
import {ListeHotels } from './Dashboard/ListeHotels';
import { Sidebar } from "./Sidebar/Sidebar";
import { Navbar } from "./Dashboard/Navbar";


function App() {

 

  return (
    <BrowserRouter>
      <main>
       
        <Routes>
        <Route path="/" element={<Connexion />}/>
          <Route path="/LoginForm" element={<LoginForm />}/>
          <Route path="/connexion" element={<Connexion />}/>
          <Route path="/PasseOublie" element={<PasseOublie />}/>
          <Route path="/Se connecter" element={<Dashboard />}/>
          <Route path="/Sidebar" element={<Sidebar  />}/>
          <Route path="/Navbar" element={<Navbar />}/>




          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/ListeHotels" element={<ListeHotels />}/>
        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App