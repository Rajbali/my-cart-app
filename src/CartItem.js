import React, { Component } from "react";

export default class cartItem extends Component {
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.Image} alt="" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>Phone</div>
          <div style={{ color: "#777" }}>Rs 999</div>
          <div style={{ color: "#777" }}>Qty : 1</div>
        </div>
      </div>
    );
  }
}
const styles = {
  Image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};
