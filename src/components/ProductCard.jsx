import s from "../styles/Cards.module.css";

const ProductCard = ({ img, title, price, availability }) => {
  return <div className={s.productCard}>
    <img src={process.env.PUBLIC_URL + `/img/${img}.png`} alt="product photo" />
    <h2 className={s.title}>{title}</h2>
    <p className={s.price}>$ {price}</p>
    <p className={s.availability}>{availability} Bowls available</p>
  </div>
}

export default ProductCard;