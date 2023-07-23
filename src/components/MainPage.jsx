import { Link } from "react-router-dom";
import style from "../styles/MainPage.module.scss";
const MainPage = ({ data, dataProject }) => {
  return (
    <div className={style.mainWork}>
      <div className={style.mainWork__blockCars}>
        {data.map((e, index) => {
          return (
            <Link key={index} className={style.mainWork__cars}>
              <img src={e.image} alt="" />
              <p>{e.date}</p>
              <h3>{e.heading}</h3>
              <h2>{e.text}</h2>
            </Link>
          );
        })}
      </div>
      <h5>Проекты</h5>
      <div>
        {dataProject.map((p, index) => {
          return (
            <div key={index} className={style.mainWork__blockProject}>
              <div className={style.mainWork__project}>
                <h4>{p.heading}</h4>
                <p>{p.text}</p>
              </div>
              <img src={p.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
