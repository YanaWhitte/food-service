import FoodFilter from "./FoodFilter";
import s from "../styles/ProductManagement.module.css";
import TitleWithButton from "./TitleWithButton";

const ProductManagement = () => {
  return <div className={s.productManagement}>
    <div className={s.title}><TitleWithButton title="Products Management" icon="optionIcon" buttonName="Manage Categories" /></div>
    <FoodFilter />
    <div className={`${s.dishListHolder} scroll`}>
      <div className={`${s.dishList}`}>
        <div className={`${s.addDish} ${s.dish}`}>
          <img src={process.env.PUBLIC_URL + "/icons/plus.svg"} alt="plus" />
          <p>Add new dish</p>
        </div>
        <DishItem image="1" title="Spicy seasoned seafood noodles" price="2.29" quantity="20" />
        <DishItem image="2" title="Salted Pasta with mushroom sauce" price="2.29" quantity="20" />
        <DishItem image="3" title="Beef dumpling in hot and sour soup" price="2.29" quantity="20" />
        <DishItem image="5" title="Hot spicy fried rice with omelet" price="2.29" quantity="20" />
        <DishItem image="4" title="Healthy noodle with spinach leaf" price="2.29" quantity="20" />
      </div>
    </div>
    <div className={s.buttons}>
      <button className={s.discard}>Discard Changes</button>
      <button className={s.save}>Save Changes</button>
    </div>
  </div>
}

const DishItem = ({ image, title, price, quantity }) => {
  return <div className={`${s.dishItem} ${s.dish}`}>
    <img src={process.env.PUBLIC_URL + `/img/img-${image}.png`} alt="dish photo" className={s.dishPhoto} />
    <h3 className={s.dishTitle}>{title}</h3>
    <div className={s.priceRow}>
      <p>$ {price}</p>
      <div className={s.dot}></div>
      <p>{quantity} Bowls</p>
    </div>
    <button>
      <img src={process.env.PUBLIC_URL + "/icons/edit.svg"} alt="edit button" />
      Edit dish
    </button>
  </div>
}

export default ProductManagement;