// StoreCarousel.js
import React, { useEffect, useState } from "react";
import "./storecarousel.scss";
import Slider from "react-slick";
import swordSound from "../../assets/sword.mp3";
import menuClickSound from "../../assets/gamestart.mp3";
import pageBgSound from "../../assets/glass-of-wine.mp3";
import { LatestDropData, accessoriesData, homeGoodsData, SoftGoodsData } from "../../Data/StoreItemsData";

const StoreCarousel = ({ setCartItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("latest drops"); // State for the selected menu item
  const [menuVisible, setMenuVisible] = useState(false); // State for menu visibility
  const [selectedCategoryData, setSelectedCategoryData] = useState(LatestDropData); // State for selected category data

  const toggleMenu = (menu, data) => {
    playClickSound();
    setSelectedMenu(menu);
    setSelectedCategoryData(data);
    setMenuVisible(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => {
      setCurrentSlide(current);
      const audio = new Audio(swordSound);
      audio.volume = 0.5;
      audio.play();
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [backgroundSound] = useState(new Audio(pageBgSound));
  useEffect(() => {
    backgroundSound.loop = true;
    backgroundSound.volume = 0.3;
    if (backgroundSound.paused) {
      backgroundSound.play().catch(error => {
        console.error("Error playing background sound:", error);
      });
    }

    return () => {
      backgroundSound.pause();
      backgroundSound.currentTime = 0;
    };
  }, [backgroundSound]);

  const playClickSound = () => {
    const audio = new Audio(menuClickSound);
    audio.volume = 0.4;
    audio.play().catch(error => {
      console.error("Error playing click sound:", error);
    });
  };

  const addToCart = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, item]);
  };

  const centerSlideIndex = Math.floor(
    (currentSlide + settings.slidesToShow / 2) % selectedCategoryData.length
  );
  const centerSlideData = selectedCategoryData[centerSlideIndex];

  return (
    <div className="store-carousel animate-turnOff">
      <div className="slides-menu">
        <div className="top" onClick={() => setMenuVisible(!menuVisible)}>
          <h3>{selectedMenu}</h3>
          <span className="arrow">&gt;</span>
        </div>
        {menuVisible && (
          <div className="menu">
            <span onClick={() => toggleMenu("latest drops", LatestDropData)}>latest drops</span>
            <span onClick={() => toggleMenu("accessories", accessoriesData)}>accessories</span>
            <span onClick={() => toggleMenu("home goods", homeGoodsData)}>home goods</span>
            <span onClick={() => toggleMenu("soft goods", SoftGoodsData)}>soft goods</span>
          </div>
        )}
      </div>
      <div className="slider-content-i">
        <Slider {...settings}>
          {selectedCategoryData.map((item, index) => (
            <div key={index} className="image-gallery-item">
              <img src={item.original} alt="" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="image-gallery-description">
        <h3 className="description">{centerSlideData.description}</h3>
        <button onClick={() => addToCart(centerSlideData)}>
          Add to cart <span className="price">{centerSlideData.price}</span>
        </button>
      </div>
    </div>
  );
};

export default StoreCarousel;
