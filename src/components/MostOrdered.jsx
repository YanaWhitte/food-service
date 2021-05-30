import s from "./MostOrdered.module.css";
import TitleWithButton from "./TitleWithButton";

const MostOrdered = () => {
  return <div className={s.mostOrdered}>
    <TitleWithButton title="Most Ordered" icon="arrowDown" buttonName="Today" />
    <div className={s.dishesList}>
      <DishesItem icon="1" title="Spicy seasoned seafood noodles" quantity="200" />
      <DishesItem icon="2" title="Salted pasta with mushroom sauce" quantity="120" />
      <DishesItem icon="3" title="Beef dumpling in hot and sour soup" quantity="80" />
    </div>
    <button className={s.viewBtn}>View All</button>
  </div>
}

const DishesItem = ({ icon, title, quantity }) => {
  return <div className={s.dish}>
    <img src={process.env.PUBLIC_URL + `/img/img-${icon}.png`} alt="dish image" />
    <div>
      <h3 className={s.dishName}>{title}</h3>
      <p className={s.quantity}>{quantity} dishes ordered</p>
    </div>
  </div>
}

export default MostOrdered;