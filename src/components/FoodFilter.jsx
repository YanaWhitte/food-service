import React from "react";
import s from "../styles/FoodFilter.module.css";

class FoodFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      currentActive: "Hot Dishes"
    }
  }

  render() {
    return <div className={s.foodFilter}>
      <span onClick={() => this.setState({ currentActive: "Hot Dishes" })}
        className={`${s.item} ${this.state.currentActive === "Hot Dishes" ? s.selected : null}`}>Hot Dishes</span>
      <span onClick={() => this.setState({ currentActive: "Cold Dishes" })}
        className={`${s.item} ${this.state.currentActive === "Cold Dishes" ? s.selected : null}`}>Cold Dishes</span>
      <span onClick={() => this.setState({ currentActive: "Soup" })}
        className={`${s.item} ${this.state.currentActive === "Soup" ? s.selected : null}`}>Soup</span>
      <span onClick={() => this.setState({ currentActive: "Grill" })}
        className={`${s.item} ${this.state.currentActive === "Grill" ? s.selected : null}`}>Grill</span>
      <span onClick={() => this.setState({ currentActive: "Appetizer" })}
        className={`${s.item} ${this.state.currentActive === "Appetizer" ? s.selected : null}`}>Appetizer</span>
      <span onClick={() => this.setState({ currentActive: "Dessert" })}
        className={`${s.item} ${this.state.currentActive === "Dessert" ? s.selected : null}`}>Dessert</span>
    </div>
  }
}

export default FoodFilter;