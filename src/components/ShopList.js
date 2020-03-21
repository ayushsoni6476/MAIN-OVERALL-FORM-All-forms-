import React, { Component } from "react";
import Shops from "./Shops";
import Title from "./Title";
import { storeShops } from "../data";
import styled from "styled-components";
import { ShopConsumer } from "../contextshop";
export default class ShopList extends Component {
  state = {
    shops: storeShops
  };
  render() {
    console.log(this.state.Shops);
    return (
      <React.Fragment>
        <ShopWrapper className="py-5">
          <div className="container">
            <Title name="our" title="shops" />
            <div className="row">
              <ShopConsumer>
                {value => {
                  return <h1>{value}</h1>;
                }}
              </ShopConsumer>
            </div>
          </div>
        </ShopWrapper>
      </React.Fragment>
    );
  }
}

const ShopWrapper = styled.section``;
