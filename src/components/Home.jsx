import React from "react";
import Instalogo from "../images/instagram.svg";
import TelegramLogo from "../images/telegram.svg";
import Foto from "../images/photo.jpg";
import { useSpring, animated } from "@react-spring/web";
const Home = () => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  return (
    <div className="container">
      <animated.div style={props} className="content">
        <div className="content__img">
          <img src={Foto} alt="" />
        </div>
        <div className="content__title">
          <h1>Привет, я Дана</h1>
          <p>Юрист</p>
          <p>Программист</p>
          <div className="content__social">
            <a href="https://www.instagram.com/aidanusenova/" target="_blank">
              <img src={Instalogo} alt="" />
            </a>
            <a href="https://t.me/aidanausenova/" target="_blank">
              <img src={TelegramLogo} alt="" />
            </a>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Home;
