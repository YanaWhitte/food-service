import React from "react";
import s from "../styles/ButtonWithIcon.module.css";

class ButtonWithIcon extends React.Component {
  constructor({ icon, buttonName }) {
    super({ icon, buttonName });
    this.state = {
      currentActive: "Dine In",
      isActiveBtn: false
    }
  }

  render() {
    return <div className={`${s.btnHolder}`}>
      <button onFocus={() => this.setState({ isActiveBtn: true })}
        onBlur={() => this.setState({ isActiveBtn: false })}
        className={`${s.btn} ${this.state.isActiveBtn === true ? s.active : null}`}>
        <img src={process.env.PUBLIC_URL + `/icons/arrowDown.svg`} alt="" />
        {this.state.currentActive}
      </button>
      <div className={`${s.droplist} ${this.state.isActiveBtn === true ? s.show : null}`}>
        <p onClick={() => this.setState({ currentActive: "Dine In" })}
          className={`${s.listItem} ${this.state.currentActive === "Dine In" ? s.selected : null}`}>Dine In</p>
        <p onClick={() => this.setState({ currentActive: "To Go" })}
          className={`${s.listItem} ${this.state.currentActive === "To Go" ? s.selected : null}`}>To Go</p>
        <p onClick={() => this.setState({ currentActive: "Delivery" })}
          className={`${s.listItem} ${this.state.currentActive === "Delivery" ? s.selected : null}`}>Delivery</p>
      </div>
    </div>
  }
}

export default ButtonWithIcon;