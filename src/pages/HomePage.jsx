import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



export default function HomePage() {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 320; // 每次滚动的宽度，可调
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <div>
    <Carousel autoplay>
      <div>
        <div className="w-full flex flex-col md:flex-row"
          style={{
            height: "50vh", // 高度占据屏幕的 50%
            backgroundImage: "url('/images/homepage1.avif')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // 保证图片完整显示
            backgroundPosition: "center", // 居中
            backgroundColor: "#f7f6e8", // 背景色做补充（图片有空白时）
          }}>
          <div className="flex flex-col justify-center items-center px-6 py-4 md:w-1/5">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="mb-6 w-32 justify-center"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start px-10 py-12 md:w-4/5">

            <p className="uppercase text-sm font-medium tracking-wide text-gray-700">
              Ahead of Mother’s Day
            </p>
            <h1 className="text-3xl md:text-4xl font-medium my-4 text-gray-800">
              A face cloth to complement your gift
            </h1>
            <p className="text-gray-700 mb-6 max-w-md">
              A simple pleasure: employing a pleasingly textured cloth to wash the body or towel a freshly cleansed face. Receive an Aesop Face Cloth with all orders over $150. Excludes Click and Collect.
            </p>
            <Button type="default" size="large" className="border-black text-black hover:bg-black hover:text-white hover:border-black transition-colors duration-300">
              Explore body care<RightOutlined />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row bg-[#f6f5e8]" style={{ height: "50vh" }}>
          {/* 左侧：Logo */}
          <div className="flex flex-col justify-center items-center px-6 py-4 md:w-1/5">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-32"
            />
          </div>

          {/* 中间：文本和按钮 */}
          <div className="flex flex-col justify-center items-start px-6 py-4 md:w-2/5">
            <p className="uppercase text-sm font-medium tracking-wide text-gray-700">
              Maternal mentors
            </p>
            <h1 className="text-3xl md:text-4xl font-medium my-4 text-gray-800">
              Reverent gifts for role models
            </h1>
            <p className="text-gray-700 mb-6 max-w-md">
              A curated range of gifts—both efficacious and aromatic—to convey your gratitude.
            </p>
            <Button
              type="default"
              size="large"
              className="border-black text-black hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
            >
              Discover Mother's Day gifts<RightOutlined />
            </Button>

          </div>

          {/* 右侧：背景图片区域 */}
          <div
            className="hidden md:block md:w-3/5 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/homePage2.avif')",
            }}
          ></div>
        </div>
      </div>
    </Carousel>


    {/* card section */}
    <div className="relative bg-[#fffef2] h-[50vh] overflow-hidden">
      {/* 左箭头 */}
      <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white  p-2 rounded-full hover:bg-black hover:text-white transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* 滚动容器 */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto px-12 py-6 scroll-smooth"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
        >
          <div className='md:w-1/5 text-center h-full items-center'>
          <h3 className="text-lg font-semibold mb-2">Sensorial selections</h3>
              <p className="text-sm text-gray-600">Thoughtful gift options ideal for thanking supportive figures.</p>
          </div>
          <div className='md:w-4/5'>
            {/* 卡片示例 */}
          {[
            {
              title: 'Body Cleanser & Balm Duo',
              desc: 'Woody, spicy, herbaceous duo for skin.',
              img: '/images/product1.avif',
            },
            {
              title: 'Screen1 Set',
              desc: 'A quartet of staples for hands and home.',
              img: '/images/product2.avif',
            },
            {
              title: 'Aurner Eau de Parfum',
              desc: 'Floral, herbaceous, fresh scent.',
              img: '/images/product3.avif',
            },
          ].map((card, index) => (
            <div key={index} className="min-w-[100px]  p-6 rounded-xl flex-shrink-0 text-center">
              {card.img && (
                <img src={card.img} alt={card.title} className="w-full h-80 object-contain mb-4" />
              )}
              {card.label && (
                <p className="text-sm text-gray-500 mb-1">{card.label}</p>
              )}
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
          </div>
          
        </div>

        {/* 右箭头 */}
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-black hover:text-white transition"
        >
          <ChevronRight size={24} />
        </button>
    </div>
    </div>
    
    
    
  )
};
