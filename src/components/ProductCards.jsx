import s from "./Cards.module.css";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  return <div className={`${s.cards} scroll`}>
    <ProductCard img="img-1" title="Spicy seasoned seafood noodles" price="2.29" availability="20" />
    <ProductCard img="img-2" title="Salted Pasta with mushroom sauce" price="2.69" availability="11" />
    <ProductCard img="img-3" title="Beef dumpling in hot and sour soup" price="2.99" availability="16" />
    <ProductCard img="img-4" title="Healthy noodle with spinach leaf" price="3.29" availability="22" />
    <ProductCard img="img-5" title="Hot spicy fried rice with omelet" price="3.49" availability="13" />
    <ProductCard img="img-6" title="Spicy instant noodle with special omelette" price="3.59" availability="17" />
    <ProductCard img="img-7" title="Healthy noodle with spinach leaf" price="3.29" availability="20" />
    <ProductCard img="img-8" title="Hot spicy fried rice with omelet" price="3.49" availability="12" />
    <ProductCard img="img-9" title="Hot special soup with shrimps" price="3.59" availability="11" />
  </div>
}

export default ProductCards;