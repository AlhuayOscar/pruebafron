import React from "react";
import Carousel from "../Carousel/Carousel.jsx";
import style from "../HomePage/HomePage.module.css";
import HomeArt from "../HomePage/HomeArt.jsx";
import Events from "../Events/Events.jsx";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const isEventsPage = true;
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const images = [
    "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682992962/UrbanClub/carrousel/3_kaor4h.jpg",
    "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682992962/UrbanClub/carrousel/6_xuxple.jpg",
    "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682992962/UrbanClub/carrousel/1_flhnhc.jpg",
    "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682992962/UrbanClub/carrousel/4_zckxd6.jpg",
    "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682992962/UrbanClub/carrousel/5_cdgswn.jpg",
    "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682992962/UrbanClub/carrousel/2_ehhiho.jpg",
  ];
  return (
    <div className={style.main}>
      <div className={`${style.ConteinerArt} ${style.CarouselContainer}`}>
        <Carousel images={images} autoPlay={true} showButtons={true} />
      </div>
      <div className={style.lower}>
        <br />
        <div className={style.lowerContainer}>
          <div className={style.events}>
            <h1 className={style.title}>Eventos más recientes</h1>
            <br />
            <div className={style.eventsCardsContainer}>
            {isEventsPage ? <Events showFilters={true} /> : null}
            </div>
          </div>
          <div className={style.moreEvents}>
            <NavLink to="/events" onClick={scrollToTop}>
              <button className={style.moreEventsButton}>
                ¿Quieres ver más eventos?
              </button>
            </NavLink>
          </div>
          <div className={style.art}>
            <h1 className={style.title}>Artistas más populares</h1>
            <div>
              <HomeArt />
            </div>
            <br />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default HomePage;
