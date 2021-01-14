import React from "react";
import "./Home.css";
import Template from "./Template";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home">
      <div className="home__container">
        <Slider {...settings}>
          <img
            className="home__image"
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/905/840905-h"
            alt=""
          />
        </Slider>
        <div className="home__heading">Best in Sports</div>
        <div className="home__row">
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/3256/883256-h" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/8207/538207-h" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3879/883879-h" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3256/883256-h" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2926/882926-h" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3006/883006-h" />
        </div>

        <div className="home__heading">Specials & Latest Movies</div>
        <div className="home__row">
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5389/875389-v" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3256/803256-v" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1456/771456-v" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7437/747437-v" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3461/713461-v" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7509/827509-v" />
        </div>

        <div className="home__heading">Shows Recommended For You</div>
        <div className="home__row">
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7290/767290-v" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7005/807005-v" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2423/622423-v" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7592/877592-v" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/830896-v" />
          <Template image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2835/742835-v" />
        </div>
      </div>
    </div>
  );
}

export default Home;
