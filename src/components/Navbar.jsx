import style from "../styles/Navbar.module.scss";
import logo_nav from "../assets/images/logo_nav.png";
import { Link } from "react-router-dom";
import { useSearchContext } from "./SearchContext";
import { useState } from "react";
import search from "../assets/svg/search.svg";
import searchNav from "../assets/svg/searchNav.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import jt from "../assets/images/jt.png";
import { BsTelegram, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Navbar = () => {
  const { setSearchQuery } = useSearchContext();
  const [isFocused, setIsFocused] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClkShow = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const placeholderText = isFocused ? "Колёса" : "Поиск";

  return (
    <nav className={style.nav}>
      <div className={style.nav__menu}>
        {showModal ? (
          <RiCloseFill size={50} onClick={closeModal} color="white" />
        ) : (
          <GiHamburgerMenu size={50} onClick={handleClkShow} />
        )}
      </div>
      {showModal && (
        <div className={style.nav__dropdown_menu}>
          <img src={jt} alt="" className={style.nav__dropdown_menu__image} />
          <button>
            <img src={searchNav} alt="" />
            <input
              type="search"
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholderText}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </button>
          <div className={style.nav__dropdown_menu__links}>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <Link to="/contact">Контакты</Link>
          </div>
          <p>Мы в социальных сетях:</p>
          <div className={style.nav__dropdown_menu__icons}>
            <Link to="https://web.telegram.org" target="blank">
              <BsTelegram size={38} color="white" />
            </Link>
            <Link to="https://web.whatsapp.com/" target="blank">
              <BsWhatsapp size={38} color="white" />
            </Link>
            <Link to="https://www.youtube.com/" target="blank">
              <BsYoutube size={38} color="white" />
            </Link>
          </div>
        </div>
      )}
      <img src={logo_nav} alt="" className={style.nav__logo} />
      <button className={style.nav__search}>
        <img src={search} alt="" />
        <input
          type="search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholderText}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </button>
      <Link to="tel:+7 (985) 886-06-55" className={style.nav__menu__phone}>
        +7 (985) 886-06-55
      </Link>
      <div className={style.nav__link}>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/contact">Контакты</Link>
      </div>
      <button className={style.nav__phone}>
        <Link to="tel:+7 (985) 886-06-55">Заказать звонок</Link>
      </button>
    </nav>
  );
};

export default Navbar;
