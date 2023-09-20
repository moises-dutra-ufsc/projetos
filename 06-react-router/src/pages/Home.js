import "./Home.css";

import { NavLink } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";
import { useRef } from "react";

import Logo from "../images/super-shoes.png";
import RightArrow from "../images/216151_right_chevron_icon.png";

const Home = () => {
  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useGetData(url);

  //console.log(items);

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div>
      <h1>Sapataria Bala!</h1>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo da Sapataria" />
        </div>
        <div className="carousel" ref={carousel}>
          {items &&
            items.map((item) => (
              <div className="item" key={item.id}>
                <div className="image">
                  <img src={item.image} alt="Imagem de um tênis" />
                </div>
                <div className="info">
                  <span className="name">{item.name}</span>
                  <span className="oldPrice">R$ {item.oldPrice}</span>
                  <span className="price">R$ {item.price}</span>
                </div>
                <p className="detalhes">
                  <NavLink to={"/products"}>Detalhes</NavLink>
                </p>
              </div>
            ))}
        </div>
        <div className="buttons">
          <button className="left_button" onClick={handleLeftClick}>
            <img src={RightArrow} alt="Scroll Left" />
          </button>
          <button className="right_button" onClick={handleRightClick}>
            <img src={RightArrow} alt="Scroll Right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
