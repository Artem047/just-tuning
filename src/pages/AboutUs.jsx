import style from "../styles/About.module.scss";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import MainContact from "../components/MainContact";
import MainLocation from "../components/MainLocation";

const AboutUs = () => {
  return (
    <div className={style.about}>
      <h1>О компании</h1>
      <img src={about1} alt="" />
      <p>
        Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar.
        Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat
        ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall
        egoll. Nynar kontranirade antigt. Busa neras kassa
      </p>
      <br />
      <p>
        Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar.
        Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat
        ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall
        egoll. Nynar kontranirade antigt. Busa neras kassa
      </p>
      <br />
      <p>
        Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar.
        Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat
        ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall
        egoll. Nynar kontranirade antigt. Busa neras kassa. Lörem ipsum osam
        preskapet i våsam. Självoptimering miment ölingar. Dikodat popösk sedan
        benade, hörar för att gätikyt. Göfakydat ståpaddling naväktigt.
        Petitoning gardinhängarjobb speskade dere ifall egoll. Nynar
        kontranirade antigt. Busa neras kassa
      </p>
      <img src={about2} alt="" />
      <p>
        Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar.
        Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat
        ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall
        egoll. Nynar kontranirade antigt. Busa neras kassa
      </p>
      <br />
      <p>
        Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar.
        Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat
        ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall
        egoll. Nynar kontranirade antigt. Busa neras kassa
      </p>
      <br />
      <p>
        Lörem ipsum osam preskapet i våsam. Självoptimering miment ölingar.
        Dikodat popösk sedan benade, hörar för att gätikyt. Göfakydat
        ståpaddling naväktigt. Petitoning gardinhängarjobb speskade dere ifall
        egoll. Nynar kontranirade antigt. Busa neras kassa. Lörem ipsum osam
        preskapet i våsam. Självoptimering miment ölingar. Dikodat popösk sedan
        benade, hörar för att gätikyt. Göfakydat ståpaddling naväktigt.
        Petitoning gardinhängarjobb speskade dere ifall egoll. Nynar
        kontranirade antigt. Busa neras kassa
      </p>
      <MainContact />
      <MainLocation />
    </div>
  );
};

export default AboutUs;
