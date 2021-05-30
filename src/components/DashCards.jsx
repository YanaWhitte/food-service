import s from "./main/Dashboard.module.css";
import DashCardItem from "./DashCardItem";

const DashCards = () => {
  return <div className={s.dashCards}>
    <DashCardItem icon="1" percent="+32.40" percentColor={s.green} arrow="greenArrowUp" number="$10,243.00" description="Total Revenue" />
    <DashCardItem icon="2" percent="-12.40" percentColor={s.red} arrow="redArrowDown" number="23,456" description="Total Dish Ordered" />
    <DashCardItem icon="3" percent="+2.40" percentColor={s.green} arrow="greenArrowUp" number="1,234" description="Total Customer" />
  </div>
}

export default DashCards;