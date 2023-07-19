import style from "../styles/Navbar.module.scss";
import logo_nav from "../assets/images/logo_nav.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <img src={logo_nav} alt="" />
      <button className={style.nav__search}>
        <BiSearchAlt2 size={24} />
        <input type="search" placeholder="Поиск" />
      </button>
      <div className={style.nav__link}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className={style.nav__phone}>
        <Link to="tel:+7 (985) 886-06-55">Заказать звонок</Link>
      </button>
    </nav>
  );
};

export default Navbar;
