import MainLocation from "../components/MainLocation";
import style from "../styles/Contact.module.scss";
import jt from "../assets/images/jt.png";
import { Link } from "react-router-dom";
import { BsTelegram, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={style.contact}>
      <h1>Наши контакты</h1>
      <div className={style.contact__info}>
        <img src={jt} alt="" className={style.contact__info__image} />
        <h2>
          Мы работаем ежедневно <br />
          <b>по предварительной записи с 10:00 до 21:00</b>
        </h2>
        <p>Адрес: г. Москва МКАД 32-й км стр. 4</p>
        <p>Телефоны: +7 (495) 204-36-56; +7 (985) 886-06-55 </p>
        <p>E-mail: info@just-tuning.ru</p>
        <Link to="https://web.whatsapp.com/" target="blank">
          <button>Написать в WhatsApp</button>
        </Link>
        <p>Мы в социальных сетях:</p>
        <div className={style.contact__info__icon}>
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
      <MainLocation />
    </div>
  );
};

export default Contact;
