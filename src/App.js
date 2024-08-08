import LoginForm from "./components/LoginForm"
import "./App.css";
import Connexion from "./components/connexion/Connexion";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Dashboard } from './Dashboard/Dashboard';
import {ListeHotels } from './Dashboard/ListeHotels';
import { Template } from "./layout/Template";
import { ToastContainer } from 'react-toastify';




function App() {

 

  return (
    <BrowserRouter>
      <main>
       
        <Routes>
        <Route index element={<Connexion />}/>
          <Route path="/loginForm" element={<LoginForm />}/>
          <Route path="/connexion" element={<Connexion />}/>
          <Route path="/template" element={<Template />}>
            <Route path="/template/dashboard" element={<Dashboard />}/>
            <Route path="/template/listeHotels" element={<ListeHotels />}/>
          </Route>




          
        </Routes>

      </main>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App