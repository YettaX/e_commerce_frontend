import React, { useState, useEffect } from 'react';
import axios from "axios";
import CategoryMenu from "./CategoryMenu";
import {
  CloseOutlined
} from '@ant-design/icons';

export default function Header() {
  // 控制弹出信息栏显示与隐藏的状态
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 处理点击事件，显示或隐藏弹出信息栏
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };


  return (
    <>
      <div className="bg-[#252525] text-white text-center p-4 cursor-pointer hover:underline text-sm" onClick={toggleModal}>
        Receive a complimentary Aesop Face Cloth with all online orders over $150. Excludes Click and Collect.  &nbsp;&nbsp;&nbsp;+
      </div>
      <div>
        <CategoryMenu />
      </div>


      {isModalVisible && (
        <div className="fixed top-0 left-0 bg-[#f6f5e8] p-4 w-6/12 h-full flex flex-col z-50">

          {/** Shipping title */}
          <div className="h-20 px-20 font-sans  flex justify-between items-center">
            <p className="text-[20px] leading-[34px] font-normal">
              Shipping fees and delivery times
            </p>
            <button onClick={toggleModal}>
              <CloseOutlined />
            </button>
          </div>

          {/** Shipping info */}
          <div className='overflow-y-auto '>

            <div className='border-t mx-20 py-10 '>
              <p className='desc_title'>Standard</p>
              <div className='flex justify-between mb-2 description'>
                <span >All orders</span>
                <span>Complimentary</span>
              </div>
              <div className='flex justify-between mb-2 description'>
                <span >Metro areas</span>
                <span>3-5 business days</span>
              </div>
              <div className='flex justify-between mb-2 description'>
                <span >Most other areas</span>
                <span>2–7 business days</span>
              </div>

            </div>

            <div className='border-t mx-20 py-10'>
              <p className='desc_title'>Same day</p>
              <div className='flex justify-between mb-4 description'>
                <span >All orders</span>
                <span>$14</span>
              </div>
              
              <p className='description'>Melbourne, Sydney & Perth metro areas</p>
              <p className='description'>Same day delivery when ordered by 12pm on weekdays</p>
              <p className='description'>(excludes public holidays)</p>
             

            </div>

          </div>
        </div>
      )}
    </>
  );
}

