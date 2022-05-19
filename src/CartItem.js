import React, { Component } from "react";

export default class cartItem extends Component {
  constructor() {
    super();
    this.state = {
      price: 26999,
      title: "Xaomi Pad 5",
      qty: 1,
      img: "",
    };
    //2nd way to data Binding
    // this.increaseQty = this.increaseQty.bind(this);
  }
  // 3rd Way will automatically bind the value of this using arrow function
  increaseQty = () => {
    console.log("state", this.state);
  };
  // increaseQty() {
  //   console.log("state", this.state);
  // }
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.Image} alt="" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="plus"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/148/148764.png"
              //1 way to data Binding
              onClick={this.increaseQty}
            />
            <img
              alt="minus"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1652972044~hmac=b09c9f519a42effde57c05bea8333d93"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  Image: {
    height: 120,
    width: 120,
    // padding: 10,
    borderRadius: 4,
    background: "#ccc",
  },
};
