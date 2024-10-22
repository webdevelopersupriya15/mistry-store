import React, { useEffect, useState } from 'react';
import Header from './common-components/Header';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Marquee from "react-marquee-slider";
import times from "lodash/times";

// slider images
import slideImg1 from './../assets/images/collections_banner.jpg';
import slideImg2 from './../assets/images/deliveryPackageBanner.jpg';
import slideImg3 from './../assets/images/Low+Price+Challenge+Banner.png';
import slideImg4 from './../assets/images/grillbannersmall.png';
import slideImg5 from './../assets/images/500+Coupon+Banner.png';

const Home = () => {
  const [cat, setCat] = useState('electricals');
  const [data, setData] = useState([]);
  const [marqueeVelocity, setVelocity] = useState(100);
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide

  const tabData = [
    // Your tab data goes here...
  ];

  const filterTabData = (type) => {
    const filteredData = tabData.filter((item) => item.category === type);
    setData(filteredData);
  };

  useEffect(() => {
    filterTabData(cat);
  }, [cat]);

  let settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 1000,
    afterChange: (index) => setCurrentSlide(index), // Capture the current slide index
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <div className='container-fluid bg-white'>
        <div className='container'>
          <Link to='/'>
            <div className='home-banner'>
              <h2>introducing</h2>
              <p>A curated collection of trending interior materials...</p>
            </div>
          </Link>
        </div>
      </div>

      <div className='py-4'>
        {/* Slider */}
        <Slider {...settings}>
          <div className='slider-card'>
            <img src={slideImg1} className='rounded-4' alt='Slide 1' />
          </div>
          <div className='slider-card'>
            <img src={slideImg2} alt='Slide 2' />
          </div>
          <div className='slider-card'>
            <img src={slideImg3} alt='Slide 3' />
          </div>
          <div className='slider-card'>
            <img src={slideImg4} alt='Slide 4' />
          </div>
          <div className='slider-card'>
            <img src={slideImg5} alt='Slide 5' />
          </div>
        </Slider>

        {/* Slide Indicator */}
        <div className="slide-indicator text-center mt-3">
          <p>{currentSlide + 1} / 5</p>
        </div>
      </div>

      <div>
        {/* Tabs */}
        <div className='container border p-5'>
          <h1>Trusted by <span className='text-danger'>75+ Brands</span></h1>
          <div className='tab-container'>
            <div className='tab-head pt-3'>
              <button onClick={() => setCat('electricals')} className={`${(cat === 'electricals') ? 'active-tab-btn' : ''}`}>Electricals</button>
              <button onClick={() => setCat('paint')} className={`${(cat === 'paint') ? 'active-tab-btn' : ''}`}>Paints</button>
              <button onClick={() => setCat('wood')} className={`${(cat === 'wood') ? 'active-tab-btn' : ''}`}>Wood Materials</button>
              <button onClick={() => setCat('plumbing')} className={`${(cat === 'plumbing') ? 'active-tab-btn' : ''}`}>Hardware & Plumbing</button>
            </div>
            <div className='tab-body'>
              {data.map((tabItem, index) => (
                <div key={index}> {/* Your TabCard component logic here */}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'red' }} onMouseEnter={() => setVelocity(0)} onMouseLeave={() => setVelocity(100)}>
        <Marquee velocity={marqueeVelocity} minScale={0.7} resetAfterTries={200}>
          {times(1, Number).map(() => (
            <div>Send your product requirements by sharing images...</div>
          ))}
        </Marquee>
      </div>

      <div style={{ height: '800px' }}></div>
    </>
  );
};

export default Home;
