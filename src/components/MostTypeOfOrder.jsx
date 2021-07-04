import s from "../styles/MostTypeOfOrder.module.css";
import TitleWithButton from "./TitleWithButton";

const MostTypeOfOrder = () => {
  return <div className={s.mostTypeOfOrder}>
    <TitleWithButton title="Most Type of Order" icon="arrowDown" buttonName="Today" />
    <div className={s.content}>
      <img src={process.env.PUBLIC_URL + "/icons/circle.svg"} alt="graph" />
      <div>
        <GraphItem color="#FF7CA3" title="Dine In" number="200" />
        <GraphItem color="#FFB572" title="To Go" number="122" />
        <GraphItem color="#65B0F6" title="Delivery" number="264" />
      </div>
    </div>
  </div>
}

const GraphItem = ({ color, title, number }) => {
  return <div className={s.graphItem}>
    <div className={s.circle} style={{ background: `${color}` }}></div>
    <div>
      <p className={s.title}>{title}</p>
      <p className={s.number}>{number} customers</p>
    </div>
  </div>
}

export default MostTypeOfOrder;