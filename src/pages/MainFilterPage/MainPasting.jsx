import { Link } from "react-router-dom";
import style from "../../styles/MainFilterPage/MainPasting.module.scss";
import { dataMainPasting } from "../../utils/data";

const MainPasting = () => {
  return (
    <div className={style.mainPasting}>
      {dataMainPasting.map((e, index) => {
        return (
          <Link key={index} className={style.mainPasting__cars}>
            <img src={e.image} alt="" />
            <p>{e.date}</p>
            <h3>{e.heading}</h3>
            <h2>{e.text}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default MainPasting;
