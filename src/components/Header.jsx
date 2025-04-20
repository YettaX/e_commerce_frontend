import React, { useState, useEffect } from 'react';
import axios from "axios";
import CategoryMenu from "./CategoryMenu";
import {
  PlusOutlined
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
        <div className="fixed top-0 left-0 bg-[#fffef2] text-white p-4 w-64 h-full flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg">Special Offer</h3>
            <p>
              Get a complimentary Aesop Face Cloth with all online orders over $150. Excludes Click and Collect.
            </p>
          </div>
          <button
            className="bg-red-500 text-white p-2 rounded mt-4"
            onClick={toggleModal}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}

  