import { Outlet, useLocation } from "react-router-dom";
import Filter from "../components/Filter";
import style from "../styles/Main.module.scss";
import Map from "../components/Map";

const Main = () => {
  const location = useLocation();
  let activeTitle = "JUST-TUNING";

  if (location.pathname === "/pasting") {
    activeTitle = "Оклейка";
  } else if (location.pathname === "/wheels") {
    activeTitle = "Колеса";
  }
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
      <div className={style.main__contact}>
        <h2>
          Оставьте заявку и мы подберём оптимальный вариант под необходимые
          задачи
        </h2>
        <form>
          <input type="text" placeholder="Ваше имя" />
          <input type="tel" placeholder="+ 7 (953) 567-34-56" />
          <button type="submit">Отправить заявку</button>
        </form>
        <h2>
          Или свяжитесь самостоятельно по номеру <br />
          <b>+7 (495) 204-36-56 или +7 (985) 886-06-55</b>
        </h2>
      </div>
      <div className={style.main__location}>
        <h2>Где мы находимся</h2>
        <Map />
      </div>
    </main>
  );
};

export default Main;
