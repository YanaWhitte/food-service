import s from "./main/Dashboard.module.css";
import ButtonWithIcon from "./ButtonWithIcon";

const TitleWithButton = ({ title, icon, buttonName }) => {
  return <div className={`${s.row} ${s.titleRow}`}>
    <h2>{title}</h2>
    <ButtonWithIcon icon={icon} buttonName={buttonName} />
  </div>
}

export default TitleWithButton;