import React, { Component } from 'react';

import { FiShoppingBag } from 'react-icons/fi';

import { ProductList } from './styles';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

export default class Home extends Component {
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

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <div>
              <button type="button">
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
