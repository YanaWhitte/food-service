import s from "../styles/Dashboard.module.css";
import ButtonWithIcon from "./ButtonWithIcon";

const TitleWithButton = ({ title, icon, buttonName, items ,asButton}) => {
  return <div className={`${s.row} ${s.titleRow}`}>
    <h2>{title}</h2>
    <ButtonWithIcon icon={icon} buttonName={buttonName} asButton={asButton} items={items} />
  </div>
}

export default TitleWithButton;