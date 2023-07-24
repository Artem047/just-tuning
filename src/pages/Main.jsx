import { Outlet, useLocation } from "react-router-dom";
import Filter from "../components/Filter";
import style from "../styles/Main.module.scss";
import MainContact from "../components/MainContact";
import MainLocation from "../components/MainLocation";

const Main = () => {
  const location = useLocation();
  const titleMap = {
    "/pasting": "Оклейка",
    "/wheels": "Колеса",
    "/antichrome": "Антихром",
    "/equipping": "Доснащение",
    "/interior": "Пошив салона",
    "/pendant": "Доработка подвески",
  };
  const activeTitle = titleMap[location.pathname] || "JUST-TUNING";

  return (
    <main className={style.main}>
      <h1>{activeTitle}</h1>
      <div>
        <Filter />
      </div>
      <Outlet />
      <div className={style.main__process}>
        <h1>Процесс нанесения</h1>
        <p>
          Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar.
          Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat
          ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall
          egoll. Nynar kontranirade antigt. Busa neras kassa
        </p>
        <p>
          Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar.
          Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat
          ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall
          egoll. Nynar kontranirade antigt. Busa neras kassa
        </p>
        <p>
          Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar.
          Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat
          ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall
          egoll. Nynar kontranirade antigt. Busa neras kassa. Lörem ipsum osam
          preskapet i våsam. Självoptimering miment ölingar. Dikodat popösk
          sedan benade, hörar för att gätikyt. Göfakydat ståpaddling naväktigt.
          Petitoning gardinhängarjobb speskade dere ifall egoll. Nynar
          kontranirade antigt. Busa neras kassa
        </p>
      </div>
      <MainContact />
      <MainLocation />
    </main>
  );
};

export default Main;
