import React from 'react';
import {Sidebar} from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Dashboard/Navbar';
import "react-toastify/dist/ReactToastify.css";

export const Template = () => {
  return (
    <div className=" w-full flex h-[100vh]">
      {/*=== SideBar ===*/}
      <div className=" max-sm:w-[20%] fixe">
        <Sidebar/>
      </div>
      <div className="w-[100%] overflow-y-auto h-auto border-[10px] ">
        {/*===  NavBar ===*/}
        <div className=" h-auto w-[100%] z-40 border-b-gray-100 border fixed">
          <Navbar/>
        </div>
        {/*=== TimeLine ===*/}
        <div className=" pt-12 pb-7 mt-[17px]  min-h-[740px] w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

