import React, { Component } from "react";
//import { storeProducts, detailProduct } from "./data";
const ShopContext = React.createContext();
class ShopProvider extends Component {
  render() {
    return (
      <ShopContext.Provider value="hello from  shop context">
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}
const ShopProvider = ShopContext.Consumer;

export { ShopProvider, ShopConsumer };
