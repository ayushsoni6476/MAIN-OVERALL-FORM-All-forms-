import React, { Component } from "react";
//import Product from "./Product";
import Title from "./Title";
import { storeShops } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default class ShopList extends Component {
  state = {
    shops: storeShops
  };
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
            <Title name="our" title="shops" />
            <div className="row" />
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
