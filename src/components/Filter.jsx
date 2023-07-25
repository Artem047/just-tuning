import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/Filter.module.scss";

const Filter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 740);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 740);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <div className={style.filter}>
      {smallScreen ? (
        <>
          <div className={style.dropdown}>
            <NavLink exact to="/" onClick={toggleDropdown}>
              Все работы
            </NavLink>
            {showDropdown && (
              <div className={style.dropdownContent}>
                <NavLink to="pasting">Оклейка</NavLink>
                <NavLink to="wheels">Колёса</NavLink>
                <NavLink to="antichrome">Антихром</NavLink>
                <NavLink to="equipping">Доснащение</NavLink>
                <NavLink to="interior">Пошив салона</NavLink>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <NavLink exact to="/">
            Все работы
          </NavLink>
          <NavLink to="pasting">Оклейка</NavLink>
          <NavLink to="wheels">Колёса</NavLink>
          <NavLink to="antichrome">Антихром</NavLink>
          <NavLink to="equipping">Доснащение</NavLink>
          <NavLink to="interior">Пошив салона</NavLink>
        </>
      )}
    </div>
  );
};

export default Filter;
