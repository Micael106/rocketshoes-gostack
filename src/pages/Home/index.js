import React, { Component } from 'react';

import { FiShoppingBag } from 'react-icons/fi';

import { ProductList } from './styles';

import api from '../../services/api';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('http://localhost:3333/products');

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.price}</span>

            <button type="button">
              <div>
                <FiShoppingBag size={24} color="#FFF" />
              </div>

              <span>ADICIONAR NA SACOLA</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
