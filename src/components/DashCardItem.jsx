import s from "../styles/Dashboard.module.css";

const DashCardItem = ({ icon, percent, percentColor, arrow, number, description }) => {
  return <div className={s.dashCardItem}>
    <div className={`${s.row}`}>
      <img src={process.env.PUBLIC_URL + `/icons/cardIcon-${icon}.svg`} alt="card icon" className={s.cardIcon} />
      <p className={`${s.percent} ${percentColor}`}>{percent}%</p>
      <img src={process.env.PUBLIC_URL + `/icons/${arrow}.svg`} alt="arrow" />
    </div>
    <div className={s.number}>{number}</div>
    <div className={s.description}>{description}</div>
  </div >
}

export default DashCardItem;