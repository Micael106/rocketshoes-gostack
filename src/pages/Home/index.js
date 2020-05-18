import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FiShoppingBag } from 'react-icons/fi';

import { ProductList } from './styles';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('http://localhost:3333/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  addProductToCart = (product) => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <div>
              <button type="button" onClick={() => this.addProductToCart()}>
                <div>
                  <span>{product.priceFormatted}</span>
                </div>
                <span>
                  COMPRAR <FiShoppingBag size={20} color="#FFF" />
                </span>
              </button>
            </div>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);
