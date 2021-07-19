import React from "react";
import s from "../styles/FoodFilter.module.css";

class FoodFilter extends React.Component {

  render() {
    return <div className={s.foodFilter}>
      <span onClick={() => this.props.onUpdateParent({ currentActive: "Hot Dishes" })}
        className={`${s.item} ${this.props.currentActive === "Hot Dishes" ? s.selected : null}`}>Hot Dishes</span>
      <span onClick={() => this.props.onUpdateParent({ currentActive: "Cold Dishes" })}
        className={`${s.item} ${this.props.currentActive === "Cold Dishes" ? s.selected : null}`}>Cold Dishes</span>
      <span onClick={() => this.props.onUpdateParent({ currentActive: "Soup" })}
        className={`${s.item} ${this.props.currentActive === "Soup" ? s.selected : null}`}>Soup</span>
      <span onClick={() => this.props.onUpdateParent({ currentActive: "Grill" })}
        className={`${s.item} ${this.props.currentActive === "Grill" ? s.selected : null}`}>Grill</span>
      <span onClick={() => this.props.onUpdateParent({ currentActive: "Appetizer" })}
        className={`${s.item} ${this.props.currentActive === "Appetizer" ? s.selected : null}`}>Appetizer</span>
      <span onClick={() => this.props.onUpdateParent({ currentActive: "Dessert" })}
        className={`${s.item} ${this.props.currentActive === "Dessert" ? s.selected : null}`}>Dessert</span>
    </div>
  }
}

export default FoodFilter;