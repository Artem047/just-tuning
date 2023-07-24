import { useForm } from "react-hook-form";
import style from "../styles/MainContact.module.scss";

const MainContact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={style.main__contact}>
      <h2>
        Оставьте заявку и мы подберём оптимальный вариант под необходимые задачи
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
  );
};

export default MainContact;
