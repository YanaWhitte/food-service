import s from "./FoodFilter.module.css";

const FoodFilter = () => {
  return <div className={s.foodFilter}>
    <span className={`${s.item} ${s.selected}`}>Hot Dishes</span>
    <span className={`${s.item}`}>Cold Dishes</span>
    <span className={`${s.item}`}>Soup</span>
    <span className={`${s.item}`}>Grill</span>
    <span className={`${s.item}`}>Appetizer</span>
    <span className={`${s.item}`}>Dessert</span>
  </div>
}

export default FoodFilter;