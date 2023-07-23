import style from "../styles/Footer.module.scss";
import logo from "../assets/images/logo_foot.png";
import { Link } from "react-router-dom";
import { BsTelegram, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__link}>
        <img src={logo} alt="" />
        <div className={style.footer__nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className={style.footer__adress}>
          <p>г. Москва МКАД 32-й км стр. 4</p>
          <p>+7 (985) 886-06-55</p>
          <p>+7 (495) 204-36-56</p>
        </div>
        <div className={style.footer__social}>
          <p>Мы в социальных сетях:</p>
          <div className={style.footer__social__icon}>
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
      </div>
      <div className={style.footer__confidentiality}>
        <Link>Политика конфиденциальности</Link>
        <Link>Публичная офферта</Link>
        <Link>Все права защищены © 2023 </Link>
      </div>
    </footer>
  );
};

export default Footer;
