import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
export default class Product extends Component {
  render() {
    const {
      id,
      title,
      img,
      price,
      company,
      info,
      inCart,
      count,
      total
    } = this.props.product;
    return (
      <ProductWrapper>
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("you clicked on image container")}
          >
            <Link to="/details">
              <button>{title}</button>
            </Link>
            <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.section``;
