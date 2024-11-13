import React, { useEffect, useState } from "react";
import "./bottombar.scss";
import LOGO from "../../assets/logo.avif";
import { useNavigate } from "react-router-dom";
import LoginBg from "../LoginBg/LoginBg";
import L_LOGO from "../../assets/login-logo.png";
import L_LOGO_C from "../../assets/login-s.svg";
import DarkBg from "../DarkBg/DarkBg";
import cherry from "../../assets/cherry.avif";
import iconSound from "../../assets/coin.mp3";
import crashSound from "../../assets/crash.mp3";

const BottomBar = ({ cartItems }) => {

  
  const navigate = useNavigate();
  const handleContinueToMenu = () => {
    playCrashSound();
    // Navigate to the summary page when the button is clicked
    navigate("/menu");
  };

  const handleContinueToShop = () => {
    playCrashSound();
    // Navigate to the Shop page when the button is clicked
    navigate("/series");
  };

  const handleContinueToMerch = () => {
    playCrashSound();
    // Navigate to the contact page when the button is clicked
    navigate("/collections");
  };

  const playSound = () => {
    const audio = new Audio(iconSound);
    audio.volume = 0.5; // Set volume to 50%
    audio.play();
  };
  const playCrashSound = () => {
    const audio = new Audio(crashSound);
    audio.volume = 0.4;
    audio.play();
  };

  useEffect(() => {
    // Add click event listeners to elements with the specified class names when component mounts
    const elements = document.querySelectorAll(
      ".user, .speaker, .speaker-mute, .flower, .cart"
    );
    elements.forEach((element) => {
      element.addEventListener("click", playSound);
    });

    // Clean up function to remove event listeners when component unmounts to avoid memory leaks
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("click", playSound);
      });
    };
  }, []); // Empty dependency array to run the effect only once when component mounts

  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggleMerchCart, setToggleMerchCart] = useState(false);
  const [toggleFlowerCart, setToggleFlowerCart] = useState(false);
  const [isSpeakerActive, setIsSpeakerActive] = useState(true);

  const toggleSpeaker = () => {
    setIsSpeakerActive(!isSpeakerActive);
  };

  return (
    <section className="bottom-bar">
      <div
        c
        className={`bottom-bar-top ${toggleProfile ? "increase-height" : ""}`}
      >
        <div className="wrapper">
          <div className="left">
            <div
              className="user"
              onClick={() => setToggleProfile(!toggleProfile)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="91"
                viewBox="0 0 91 91"
                fill="none"
                class="-mt-1 h-6 w-6 transition-all ease-in-out group-hover:scale-125"
              >
                <path
                  fill="#fff"
                  stroke-width="2"
                  stroke="black"
                  stroke-opacity="0.7"
                  d="M85.705 76.193v-9.519h-4.76v-4.76h-4.76v-4.76h-4.759v-4.78H57.145v4.78h-9.52v.018H33.33v-4.78H19.05v4.78h-4.76v4.76H9.53v4.759H4.77v9.52H0v14.291H47.639v-.018h42.836V76.193h-4.77ZM66.665 14.279V9.52h-4.76V4.759h-4.76V0h-9.52v.017h-14.31v4.76h-4.76v4.76h-4.759v4.76h-4.761v19.04h4.761v4.76h4.759v4.76h4.76v4.77h14.31v-.018h9.52v-4.77h4.76V38.08h4.76v-4.761h4.761v-19.04h-4.761Z"
                ></path>
              </svg>
            </div>
            {isSpeakerActive && (
              <div className="speaker" onClick={toggleSpeaker}>
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  class="h-6 w-6 transition-all ease-in-out group-hover:scale-125"
                >
                  <g stroke-width="2" stroke="black" stroke-opacity="0.7">
                    <path d="M32 36H23V63H32V36Z" fill="white"></path>
                    <path d="M41 63H32V72H41V63Z" fill="white"></path>
                    <path d="M77 36H68V63H77V36Z" fill="white"></path>
                    <path d="M86 27V72H95V27H86Z" fill="white"></path>
                    <path d="M86 72H77V81H86V72Z" fill="white"></path>
                    <path d="M86 18H77V27H86V18Z" fill="white"></path>
                    <path
                      d="M50 18H41V27H50V72H41V81H50V90H59V9H50V18Z"
                      fill="white"
                    ></path>
                    <path d="M41 27H32V36H41V27Z" fill="white"></path>
                  </g>
                </svg>
              </div>
            )}
            {!isSpeakerActive && (
              <div className="speaker-mute" onClick={toggleSpeaker}>
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  class="h-6 w-6 transition-all ease-in-out group-hover:scale-125"
                >
                  <g stroke-width="2" stroke="black" stroke-opacity="0.7">
                    <path d="M41 63H32V72H41V63Z" fill="white"></path>
                    <path
                      d="M59 9H50V18H41V27H50V36H41V45H50V72H41V81H50V90H59V36H68V27H59V9Z"
                      fill="white"
                    ></path>
                    <path d="M86 9H77V18H86V9Z" fill="white"></path>
                    <path d="M77 18H68V27H77V18Z" fill="white"></path>
                    <path
                      d="M41 54V45H32V36H23V63H32V54H41Z"
                      fill="white"
                    ></path>
                    <path d="M23 63H14V72H23V63Z" fill="white"></path>
                    <path d="M14 72H5V81H14V72Z" fill="white"></path>
                    <path d="M41 27H32V36H41V27Z" fill="white"></path>
                  </g>
                </svg>
              </div>
            )}
          </div>
          <div onClick={handleContinueToMenu} className="bottom-logo">
            <img src={LOGO} alt="" />
          </div>
          <div className="right">
            <div
              className="flower"
              onClick={() => setToggleFlowerCart(!toggleFlowerCart)}
            >
              <svg
                width="62"
                height="62"
                viewBox="0 0 66 66"
                fill="none"
                class="h-[30px] w-[30px] transition-all ease-in-out group-hover:scale-125"
              >
                <path
                  stroke-width="2"
                  stroke="black"
                  stroke-opacity="0.7"
                  d="M40.6434 23.5133H42.7956V21.3731H44.938V19.2409C45.5617 19.2409 46.1353 19.2232 46.7056 19.2474C47.0223 19.2619 47.0998 19.1472 47.0885 18.8517C47.0675 18.2895 47.0821 17.7258 47.0821 17.1104H49.2148C49.2148 16.4643 49.2294 15.8699 49.2083 15.2771C49.1987 15.0073 49.2891 14.9363 49.5476 14.9444C50.1325 14.9621 50.7174 14.9492 51.3459 14.9492V12.8106C51.9825 12.8106 52.5771 12.7977 53.1701 12.8171C53.4318 12.8251 53.5191 12.7444 53.5126 12.4827C53.4981 11.898 53.5078 11.3133 53.5078 10.7027H55.6001C55.605 10.8238 55.6147 10.9321 55.6147 11.0387C55.6147 13.6279 55.6098 16.2188 55.6228 18.808C55.6228 19.1263 55.5387 19.2296 55.2172 19.2151C54.6549 19.1909 54.0911 19.2086 53.4722 19.2086V25.6147C53.0554 25.6147 52.6935 25.6067 52.3315 25.618C52.0052 25.6277 51.5705 25.5437 51.388 25.7165C51.2231 25.8716 51.3266 26.3206 51.3249 26.6404C51.3217 27.6031 51.3249 28.5658 51.3249 29.5285C51.3249 29.6464 51.3249 29.7643 51.3249 29.9145H49.197V34.1756H47.0611V36.3223C46.4503 36.3223 45.8897 36.3223 45.329 36.3223C45.0425 36.3223 44.8992 36.4693 44.8992 36.7632C44.8992 37.3237 44.8992 37.8842 44.8992 38.4786C44.2756 38.4786 43.7036 38.4932 43.13 38.4722C42.8473 38.4625 42.7374 38.5303 42.7503 38.8356C42.7746 39.4187 42.7568 40.0034 42.7568 40.6156H44.9315V38.5239H49.2003V36.4095H62V38.4803C61.441 38.4803 60.8803 38.4803 60.3196 38.4803C60.0353 38.4803 59.8926 38.6256 59.8915 38.9164C59.8915 39.4672 59.8915 40.0196 59.8915 40.6156H57.7603V42.751C57.1674 42.751 56.6067 42.751 56.0461 42.751C55.7606 42.751 55.6179 42.8958 55.6179 43.1855C55.6179 43.6394 55.6001 44.0933 55.6228 44.5472C55.6373 44.8347 55.5274 44.8993 55.2608 44.8961C54.0652 44.8847 52.8696 44.8993 51.6739 44.8864C51.3977 44.8831 51.3104 44.9687 51.3185 45.2449C51.3363 45.8281 51.3233 46.4144 51.3233 47.033H40.6499V49.2023H42.7552C42.7552 49.7741 42.7552 50.312 42.7552 50.8483C42.7552 51.181 42.9216 51.3474 43.2544 51.3474C43.7084 51.3474 44.1625 51.3587 44.6165 51.3442C44.8411 51.3361 44.9041 51.4217 44.8992 51.6333C44.8895 52.1082 44.896 52.5847 44.896 53.0612C44.896 53.3551 45.0393 53.5027 45.3258 53.5037C45.8864 53.5037 46.4487 53.5037 47.0481 53.5037C47.0481 54.1757 47.053 54.804 47.0401 55.4324C47.0401 55.4921 46.9334 55.5713 46.8607 55.6036C46.7961 55.6327 46.7088 55.61 46.6313 55.61C43.3546 55.61 40.0779 55.61 36.8012 55.61H36.3812C36.3812 54.9801 36.3682 54.3954 36.386 53.8107C36.3941 53.5328 36.3004 53.444 36.0257 53.4537C35.5281 53.4714 35.0288 53.4488 34.5312 53.4618C34.2985 53.4682 34.2193 53.3858 34.2242 53.1565C34.2355 52.5621 34.2274 51.966 34.2274 51.3215C33.5294 51.3215 32.8702 51.3183 32.211 51.3296C32.1577 51.3296 32.0785 51.4281 32.0607 51.4944C32.0349 51.5864 32.0526 51.6914 32.0526 51.7916C32.0526 55.0447 32.0526 58.2994 32.0526 61.5526C32.0526 61.6931 32.0526 61.8352 32.0526 62H29.9457V61.5574C29.9457 58.2817 29.9393 55.0059 29.9538 51.7302C29.9538 51.3829 29.852 51.2925 29.524 51.3135C29.0829 51.3409 28.6386 51.3199 28.1959 51.3199C27.9137 51.3199 27.7721 51.4669 27.771 51.7609C27.771 52.2261 27.7629 52.6913 27.7742 53.1549C27.7791 53.3794 27.708 53.4714 27.4705 53.465C26.9841 53.4521 26.4962 53.4763 26.0098 53.4553C25.7142 53.4424 25.5978 53.5231 25.6108 53.8413C25.635 54.3938 25.614 54.9478 25.6108 55.5002C25.6108 55.5212 25.5978 55.5422 25.5801 55.5955C25.4734 55.6004 25.3555 55.61 25.2375 55.61C21.9382 55.61 18.6406 55.6052 15.3413 55.6181C15.0084 55.6181 14.9325 55.5115 14.9454 55.2046C14.968 54.6554 14.9519 54.103 14.9519 53.5054C15.5481 53.5054 16.1087 53.5054 16.6694 53.5054C16.9581 53.5054 17.1029 53.3595 17.104 53.0676C17.104 52.6251 17.1185 52.1809 17.0992 51.7399C17.0862 51.4491 17.1557 51.3232 17.4805 51.3425C17.9539 51.3716 18.4321 51.3361 18.9071 51.3555C19.1657 51.3652 19.2578 51.2892 19.2497 51.0227C19.2319 50.438 19.2448 49.8517 19.2448 49.2201H21.3582V47.0524H10.6783C10.6783 46.4435 10.6605 45.8814 10.6848 45.3209C10.6993 44.993 10.6169 44.8799 10.2663 44.888C9.11589 44.9106 7.96388 44.8977 6.81187 44.8961C6.68262 44.8961 6.55336 44.8847 6.38532 44.8783V42.7704H4.25581V40.6366H2.11821V38.4996H0V36.4079H12.7739V38.5045H17.0539V40.6318H19.2432V39.3137C19.2432 38.7624 18.9659 38.4867 18.4111 38.4867C17.9927 38.4867 17.5742 38.4867 17.1024 38.4867C17.1024 37.9198 17.1024 37.3819 17.1024 36.844C17.1024 36.2609 17.1315 36.3352 16.5773 36.332C16.0489 36.3287 15.5206 36.332 14.9551 36.332V34.1998H12.8143V32.0774H10.6751C10.6751 31.9159 10.6751 31.7899 10.6751 31.6639C10.6751 29.8047 10.6751 27.9455 10.6751 26.0864C10.6751 25.7795 10.5167 25.626 10.2 25.626C9.66039 25.626 9.12074 25.626 8.53908 25.626V19.2199C7.89117 19.2199 7.28689 19.2119 6.68262 19.2248C6.44995 19.2296 6.37724 19.1537 6.37886 18.9211C6.38532 16.2543 6.38371 13.5875 6.38371 10.9191C6.38371 10.8545 6.39663 10.7915 6.40633 10.7092H8.49061C8.49061 11.197 8.49061 11.6783 8.49061 12.1596C8.49061 12.6001 8.71357 12.8203 9.15951 12.8203C9.63453 12.8203 10.1096 12.8203 10.6298 12.8203V14.9589C11.0774 14.9589 11.4813 14.9589 11.8868 14.9589C12.0856 14.9589 12.2859 14.9702 12.4847 14.9557C12.7109 14.9379 12.7965 15.0122 12.79 15.2513C12.7739 15.8473 12.7852 16.4449 12.7852 17.0943H14.9179V18.4624C14.9179 18.9879 15.1867 19.2506 15.7242 19.2506C16.1523 19.2506 16.5821 19.2506 17.0507 19.2506V21.3682H19.2028V23.5214H21.3453V25.6583H23.4829V29.9404H25.6156V32.0612H27.8098C27.8098 31.3925 27.8178 30.7416 27.7968 30.0938C27.7952 30.0341 27.6191 29.9323 27.5205 29.9291C26.9243 29.9129 26.3281 29.921 25.698 29.921C25.6883 29.7692 25.6722 29.6416 25.6722 29.5156C25.6722 24.8006 25.6738 20.0873 25.6641 15.3724C25.6641 15.0413 25.7416 14.925 26.0874 14.9492C26.5382 14.9815 26.9954 14.9395 27.4478 14.9637C27.7435 14.9799 27.8195 14.8814 27.8178 14.5906C27.8065 11.99 27.8114 9.38949 27.8114 6.78892C27.8114 6.67101 27.8114 6.55148 27.8114 6.39803H29.9328V0H32.0429V6.37542H34.1854C34.1854 6.54179 34.1854 6.66132 34.1854 6.77923C34.1854 9.36849 34.1919 11.9594 34.1789 14.5486C34.1789 14.8684 34.2629 14.9718 34.5845 14.954C35.0708 14.9282 35.5588 14.9573 36.0451 14.9427C36.2664 14.9363 36.3488 15.017 36.3278 15.2303C36.3198 15.3062 36.3278 15.3853 36.3278 15.4628C36.3278 20.1212 36.3278 24.7813 36.3278 29.4397V29.9113C35.8528 29.9113 35.415 29.9113 34.9755 29.9113C34.4498 29.9113 34.187 30.1795 34.187 30.7157C34.187 31.1244 34.1902 31.5346 34.1935 31.9433C34.1935 31.974 34.2145 32.0031 34.2387 32.0709C34.8898 32.0709 35.5523 32.079 36.2115 32.058C36.2697 32.0564 36.3682 31.8755 36.3715 31.7769C36.386 31.1809 36.3795 30.5849 36.3795 29.9549H38.4929V25.6745H40.6418V23.5133H40.6434ZM31.004 47.0928C31.2593 47.0928 31.5146 47.0766 31.7667 47.0976C32.0526 47.1219 32.1367 46.991 32.1334 46.7326C32.127 46.2674 32.1447 45.8038 32.1286 45.3386C32.1189 45.0576 32.1997 44.9397 32.5018 44.9558C32.9768 44.9784 33.4535 44.951 33.9285 44.9655C34.1951 44.9736 34.2775 44.8637 34.2726 44.6118C34.2613 44.0803 34.2646 43.5505 34.271 43.0191C34.2743 42.7994 34.2129 42.7042 33.9657 42.7155C33.4583 42.7365 32.9477 42.7138 32.4388 42.7268C32.2045 42.7332 32.1254 42.6428 32.1286 42.4166C32.1367 41.9304 32.1253 41.4426 32.1318 40.9564C32.135 40.7028 32.064 40.5736 31.7715 40.5849C31.2529 40.6059 30.731 40.6043 30.2123 40.5849C29.9409 40.5752 29.8601 40.6883 29.8633 40.9322C29.8682 41.3974 29.8504 41.8626 29.8682 42.3262C29.8795 42.6169 29.8052 42.7478 29.4804 42.7284C28.9957 42.7009 28.5061 42.7332 28.0198 42.7138C27.7968 42.7058 27.7209 42.7817 27.7241 42.9933C27.729 43.5457 27.7306 44.0997 27.7241 44.6521C27.7209 44.8799 27.8162 44.9671 28.0424 44.9623C28.5288 44.9526 29.0167 44.9736 29.503 44.9542C29.7793 44.9429 29.8763 45.0382 29.8682 45.3128C29.8536 45.799 29.8682 46.2868 29.8666 46.773C29.8666 47.0088 29.9587 47.1122 30.2059 47.096C30.4709 47.0783 30.7374 47.0928 31.0024 47.0928H31.004Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div
              className="cart"
              onClick={() => setToggleMerchCart(!toggleMerchCart)}
            >
              <svg
                width="405"
                height="309"
                viewBox="0 0 405 309"
                fill="none"
                class="h-8 w-8 transition-all ease-in-out group-hover:scale-125"
              >
                <g stroke-width="2" stroke="black" stroke-opacity="0.7">
                  <path d="M0 0H30V30H0V0Z" fill="white"></path>
                  <path d="M30 0H60V30H30V0Z" fill="white"></path>
                  <path d="M60 30H90V60H60V30Z" fill="white"></path>
                  <path d="M90 234H120V264H90V234Z" fill="white"></path>
                  <path d="M345 234H375V264H345V234Z" fill="white"></path>
                  <path d="M120 264H150V291H120V264Z" fill="white"></path>
                  <path d="M375 264H405V291H375V264Z" fill="white"></path>
                  <path d="M90 291H120V309H90V291Z" fill="white"></path>
                  <path d="M345 291H375V309H345V291Z" fill="white"></path>
                  <path d="M60 264H90V291H60V264Z" fill="white"></path>
                  <path d="M315 264H345V291H315V264Z" fill="white"></path>
                  <path d="M90 60H120V180H90V60Z" fill="white"></path>
                  <path d="M150 90H180V210H150V90Z" fill="white"></path>
                  <path d="M210 90H240V210H210V90Z" fill="white"></path>
                  <path
                    d="M330 120V150L120 150V120L330 120Z"
                    fill="white"
                  ></path>
                  <path d="M270 90H300V210H270V90Z" fill="white"></path>
                  <path d="M330 90H360V180H330V90Z" fill="white"></path>
                  <path d="M360 60V90H120V60H360Z" fill="white"></path>
                  <path d="M330 180V210L120 210V180H330Z" fill="white"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {toggleMerchCart && (
        <div
          className={`cart-sec merch-cart ${
            toggleMerchCart ? "open" : "closed"
          }`}
        >
          <DarkBg className="dark-bg" />
          <div className="cart-content">
            <div className="header">
              <h4>merch cart</h4>
              <span onClick={() => setToggleMerchCart(!toggleMerchCart)}>
                X
              </span>
            </div>
            <div className="cart-empty">
              <img src={cherry} alt="" />
              <h3>Your cart is empty</h3>
              <button onClick={handleContinueToMerch}>SHOP NOW</button>
            </div>
            <div className="cart-active">
        <div className="items">
          {cartItems.map((item, index) => (
            <div key={index} className="item">
              <div className="top">
                <img className="original" src={item.original} alt="" />
                <h4 className="description">{item.description}</h4>
              </div>
              <div className="bottom">
                <div className="price">{item.price}</div>
                <div className="quantity">
                      <span>-</span>
                      <p>1</p>
                      <span>+</span>
                    </div>
              </div>
            </div>
          ))}
        </div>
        <div className="summary">
          <div className="total-sec">
            <h3>Total</h3>
            <div className="total-price">{calculateTotal(cartItems)}</div>
          </div>
          <button className="checkout">CHECKOUT</button>
          <button className="clear-cart">Clear Cart</button>
        </div>
      </div>
          </div>
        </div>
      )}
      {toggleFlowerCart && (
        <div
          className={`cart-sec flower-cart ${
            toggleFlowerCart ? "open" : "closed"
          }`}
        >
          <DarkBg className="dark-bg" />
          <div className="cart-content">
            <div className="header">
              <h4>flower cart</h4>
              <span onClick={() => setToggleFlowerCart(!toggleFlowerCart)}>
                X
              </span>
            </div>
            <div className="cart-empty">
              <img src={cherry} alt="" />
              <h3>Your cart is empty</h3>
              <button onClick={handleContinueToShop}>SHOP NOW</button>
            </div>
            <div className="cart-active"></div>
          </div>
        </div>
      )}

      {toggleProfile && (
        <div className="sign-in">
          <div className="wrapper">
            <LoginBg />
            <div className="sign-in-container">
              <div className="top">
                <img className="login-logo" src={L_LOGO} alt="" />

                <h2>+</h2>

                <img className="login-logo-c" src={L_LOGO_C} alt="" />

                <a href="/" className="sign-in-btn">
                  Sign-In
                </a>
                <span>Don't have Cannaverse account?</span>
                <a className="sign-up-btn" href="/">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + parseFloat(item.price.replace("$", "")), 0).toFixed(2) + " USD";
};

export default BottomBar;
