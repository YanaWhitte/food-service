import s from "../../styles/Content.module.css";
import Content from "./Content";
import Order from "../Order";

const ContentContainer = () => {
  return <div className={s.contentContainer}>
    <Content />
    <Order />
  </div>
}

export default ContentContainer;