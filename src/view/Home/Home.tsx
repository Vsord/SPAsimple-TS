import React, { useContext } from "react";
import Slider from "react-slick";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import productsContext from "../../context/context";
import { ContextT } from "../../models/ContextT";
import "./Home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { products } = useContext(productsContext) as ContextT;

  const CARDS = products.map((item, index) => {
    if (index <= 7) {
      return <ProductsCard product={item} key={item.id} />;
    }
  });

  const NextArrow = (props: React.HTMLAttributes<HTMLElement>) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ boxShadow: "0px 1px 15px #ccc", background: "#fff" }}
        onClick={onClick}
      >
        <div className="arrow-inner next-arr"></div>
      </div>
    );
  };

  const PrevArrow = (props: React.HTMLAttributes<HTMLElement>) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ boxShadow: "0px 1px 15px #ccc", background: "#fff" }}
        onClick={onClick}
      >
        <div className="arrow-inner prev-arr"></div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <Slider {...settings}>{CARDS}</Slider>
    </div>
  );
};

export default Home;
