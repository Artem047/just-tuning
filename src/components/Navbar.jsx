import style from "../styles/Navbar.module.scss";
import logo_nav from "../assets/images/logo_nav.png";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSearchContext } from "./SearchContext";
import { useState } from "react";

const Navbar = () => {
  const { setSearchQuery } = useSearchContext();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const placeholderText = isFocused ? "Оклейка пленкой" : "Поиск";

  return (
    <nav className={style.nav}>
      <img src={logo_nav} alt="" />
      <button className={style.nav__search}>
        <BiSearchAlt2 size={24} />
        <input
          type="search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholderText}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </button>
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
