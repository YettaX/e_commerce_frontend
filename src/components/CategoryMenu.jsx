// /components/CategoryMegaMenu.jsx
import React, { useState } from "react";
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Modal, Input, Button } from 'antd';
import { useAuth } from '../hooks/useAuth';


import LoginMenu from "./LoginMenu";

const fakeMenuData = [
  {
    id: 1,
    name: "Skin Care",
    image: "/images/skin.avif",
    featured: [
      { id: 101, title: "Cleansers" },
      { id: 102, title: "Moisturisers" },
      { id: 103, title: "Treatments" },
    ],
    newItems: ["New Vitamin C Serum", "Hydration Boost Cream"],
  },
  {
    id: 2,
    name: "Hair",
    image: "/images/hair.avif",
    featured: [
      { id: 201, title: "Shampoo" },
      { id: 202, title: "Conditioner" },
    ],
    newItems: ["New Scalp Detox Shampoo"],
  },
  {
    id: 3,
    name: "Body",
    image: "/images/body.avif",
    featured: [
      { id: 301, title: "Hand Washes" },
      { id: 302, title: "Bar Soaps" },
      { id: 303, title: "Scrubs" },
    ],
    newItems: ["Eleos Hand Balm", "Nourishing Cleanser"],
  },
];



export default function CategoryMegaMenu() {

  const { isLoggedIn, logout } = useAuth();
  
  const [activeMenuId, setActiveMenuId] = useState(null);

  const activeItem = fakeMenuData.find((item) => item.id === activeMenuId);

  const openSubMenu = (menuId) => {
    setActiveMenuId(menuId);
    setIsVisibleMenu(true);
  };

  const closeSubMenu = () => {
    setActiveMenuId(null);
    setIsVisibleMenu(false);
  }




  return (
    <div className="relative w-full ">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between p-10 bg-[#fffef2] text-sm font-medium text-[#3C3D37]">
        <div className="space-x-10 pl-3">
          {fakeMenuData.map((menu) => (
            <button
              key={menu.id}
              onClick={() => openSubMenu(menu.id)}
              className={`text-lg pb-2 transition-all border-b-2 ${activeMenuId === menu.id ? "border-black" : "border-transparent"
                }`}
            >
              {menu.name}
            </button>

          ))}
          <button className="text-lg"><SearchOutlined /></button>
        </div>

        <div className="space-x-10 pl-3">
          {isLoggedIn ? (
            <>
              <span>Welcome back!</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <LoginMenu />
          )}
          
          <button>Cart</button>
        </div>
      </div>


      {/* Submenu Area */}
      {activeItem && (
        <div className="top-0 left-0 w-screen h-screen bg-[#eee6dd] fixed z-50 ">

          {/* Main Menu tab */}
          <div className="bg-[#fffef2] flex justify-between items-center w-full h-24">
            <div className="">
              {fakeMenuData.map((menu) => (
                <button
                  key={menu.id}
                  onClick={() => openSubMenu(menu.id)}
                  className={`h-24 top-button text-[#3C3D37] font-bold mx-4 pb-2 transition-all border-b-2 ${activeMenuId === menu.id ? "border-black" : "border-transparent"
                    }`}
                >
                  {menu.name}
                </button>
              ))}
            </div>
            <button className="flex items-center space-x-4 mx-10" onClick={() => closeSubMenu()}> <CloseOutlined /> </button>
          </div>



          {/*Real submenu area*/}
          <div className="flex flex-col md:flex-row ">

            {/* Logo area*/}
            <div className="flex flex-col  px-6 py-4 md:w-1/5 mt-20">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="mb-6 w-32 justify-center"
              />
            </div>

            {/* SubCategories area */}
            <div className="md:w-1/5 mt-20 ">
              <h3 className="font-semibold mb-8 hover:underline cursor-pointer">Discover {activeItem.name} →</h3>
              <ul className="space-y-4">
                {activeItem.featured.map((feature) => (
                  <li key={feature.id} className="hover:underline cursor-pointer">
                    {feature.title}
                  </li>
                ))}
                <li className="font-medium mt-2 cursor-pointer">
                  See all {activeItem.name}
                </li>
              </ul>
            </div>


            <div className="md:w-1/5 mt-20">
              <h3 className="font-semibold mb-8 ">New additions</h3>
              <ul className="space-y-4 hover:underline cursor-pointer">
                {activeItem.newItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Right: Image */}
            <div className="md:w-2/5">
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="object-cover w-full h-full"
              />
            </div>

          </div>





        </div>
      )}
    </div>
  );
}