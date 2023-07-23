import { Outlet, useLocation } from "react-router-dom";
import Filter from "../components/Filter";
import style from "../styles/Main.module.scss";
import Map from "../components/Map";
import { useForm } from "react-hook-form";

const Main = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

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
      <div className={style.main__contact}>
        <h2>
          Оставьте заявку и мы подберём оптимальный вариант под необходимые
          задачи
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="name"
            placeholder="Ваше имя"
            {...register("name", { required: true })}
          />
          <input
            type="tel"
            placeholder="+ 7 (953) 567-34-56"
            {...register("tel", { required: true })}
          />
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
