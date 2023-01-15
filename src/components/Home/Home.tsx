import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";
import productsContext from "../../context/context";
import { ContextT } from "../../models/ContextT";
import { ProductT } from "../../models/ProductT";

const Home = () => {
  const { products } = useContext(productsContext) as ContextT;

  function SampleArrow(props: React.HTMLAttributes<HTMLElement>) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <Slider {...settings}>
        {products.map((item: ProductT) => {
          if (item.id <= 8) {
            return (
              <div className="homeBlock" key={item.id}>
                <div className="homeProductsTop">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
                <div className="homeProductsBottom">
                  <h3>Price: {item.price}$</h3>
                  <p>Category: {item.category}</p>
                </div>
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
};

export default Home;
