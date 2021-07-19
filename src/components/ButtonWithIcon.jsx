import React from "react";
import s from "../styles/ButtonWithIcon.module.css";

const defaultItems = ["Dine In", "To Go", "Delivery"];

class ButtonWithIcon extends React.Component {
  constructor(props) {
    super(props);
    const items = props.items ? props.items : defaultItems;
    this.state = {
      items,
      currentActive: items[0],
      isActiveBtn: false,
    };
  }

  render() {
    return (
      <div className={`${s.btnHolder}`}>
        <button
          onBlur={() => this.setState({ isActiveBtn: false })}
          onClick={() => this.setState({ isActiveBtn: !this.state.isActiveBtn })}
          className={ !this.props.asButton ? `${s.btn} ${this.state.isActiveBtn === true ? s.active : null}` : s.btn}
        >
          <img src={process.env.PUBLIC_URL + `/icons/${this.props.icon ?? "arrowDown"}.svg`} alt="" />
          {this.state.currentActive}
        </button>
        {!this.props.asButton && <div className={`${s.droplist} ${this.state.isActiveBtn === true ? s.show : null}`}>
          {this.state.items.map((item) => (
            <p
              onClick={() => this.setState({ currentActive: item, isActiveBtn: false })}
              className={`${s.listItem} ${this.state.currentActive === item ? s.selected : null}`}
            >
              {item}
            </p>
          ))}
        </div>}
      </div>
    );
  }
}

export default ButtonWithIcon;
