import Map from "./Map";
import style from "../styles/MainLocation.module.scss";

const MainLocation = () => {
  return (
    <div className={style.main__location}>
      <h2>Где мы находимся</h2>
      <Map />
    </div>
  );
};

export default MainLocation;
