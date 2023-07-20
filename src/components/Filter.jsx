import { NavLink } from "react-router-dom";
import style from "../styles/Filter.module.scss";

const Filter = () => {
  return (
    <div className={style.filter}>
      <NavLink to="/">Все работы</NavLink>
      <NavLink to="pasting">Оклейка</NavLink>
      <NavLink to="wheels">Колёса</NavLink>
      <NavLink to="aw">Антихром</NavLink>
      <NavLink to="wad">Доснащение</NavLink>
      <NavLink to="ad">Пошив салона</NavLink>
      <NavLink to="daw">Доработка подвески</NavLink>
    </div>
  );
};

export default Filter;
