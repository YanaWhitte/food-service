import ProductCards from "../ProductCards";
import s from "../../styles/Content.module.css";
import TitleWithButton from "../TitleWithButton";
import FoodFilter from "../FoodFilter";
import Header from "../Header";
import {useState} from 'react'

const Content = () => {
  const [currentActive,setCurrentActive] = useState("Hot Dishes")
  return <div className={s.content}>
    <Header title="Jaegar Resto" withSearch />
    <FoodFilter currentActive={currentActive} onUpdateParent={({currentActive: newCurrentActive}) => setCurrentActive(newCurrentActive)} />
    <TitleWithButton title="Choose Dishes" icon="arrowDown" buttonName="Dine In" />
    <ProductCards key={currentActive} currentActive={currentActive} />
  </div>
}

export default Content;