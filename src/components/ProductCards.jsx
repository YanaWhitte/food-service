import { useMemo } from "react";
import s from "../styles/Cards.module.css";
import ProductCard from "./ProductCard";

const ProductCards = ({currentActive}) => {
 const items = useMemo(() => {

  let items = [
    <ProductCard img="img-1" key="img-1" title="Spicy seasoned seafood noodles" price="2.29" availability="20" />,
    <ProductCard img="img-2" key="img-2" title="Salted Pasta with mushroom sauce" price="2.69" availability="11" />,
    <ProductCard img="img-3" key="img-3" title="Beef dumpling in hot and sour soup" price="2.99" availability="16" />,
    <ProductCard img="img-4" key="img-4" title="Healthy noodle with spinach leaf" price="3.29" availability="22" />,
    <ProductCard img="img-5" key="img-5" title="Hot spicy fried rice with omelet" price="3.49" availability="13" />,
    <ProductCard img="img-6" key="img-6" title="Spicy instant noodle with special omelette" price="3.59" availability="17" />,
    <ProductCard img="img-7" key="img-7" title="Healthy noodle with spinach leaf" price="3.29" availability="20" />,
    <ProductCard img="img-8" key="img-8" title="Hot spicy fried rice with omelet" price="3.49" availability="12" />,
    <ProductCard img="img-9" key="img-9" title="Hot special soup with shrimps" price="3.59" availability="11" />,
  ]

  const randomItems = []

  while(items.length) {
    const maxItems = items.length

    const randomIndex  = Math.floor(Math.random() * maxItems)
    const randomItem = items[randomIndex]
    items = items.filter((_, index)=> randomIndex !== index)
    randomItems.push(randomItem)
  }
  return randomItems

 },[])



  return <div className={`${s.cards}`}>
    {items}
  </div>
}

export default ProductCards;