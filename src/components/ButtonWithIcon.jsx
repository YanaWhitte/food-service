import s from "../styles/ButtonWithIcon.module.css";

const ButtonWithIcon = ({ icon, buttonName }) => {
  return <button className={s.btn}>
    <img src={process.env.PUBLIC_URL + `/icons/${icon}.svg`} alt="filter" />
    {buttonName}
  </button>
}

export default ButtonWithIcon;