import { NavLink } from "react-router-dom";
import style from "../styles/Filter.module.scss";

const Filter = () => {
  return (
    <div className={style.filter}>
      <NavLink to="/">Все работы</NavLink>
      <NavLink to="pasting">Оклейка</NavLink>
      <NavLink to="wheels">Колёса</NavLink>
      <NavLink to="antichrome">Антихром</NavLink>
      <NavLink to="equipping">Доснащение</NavLink>
      <NavLink to="interior">Пошив салона</NavLink>
    </div>
  );
};

export default Filter;
