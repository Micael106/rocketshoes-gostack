import React, { Component } from 'react';

import { FiShoppingBag } from 'react-icons/fi';

import { ProductList } from './styles';

export default class Home extends Component {
  render() {
    return (
      <ProductList>
        <li>
          <img
            src="https://cdn.awsli.com.br/800x800/1060/1060828/produto/42168015/1ae3f14322.jpg"
            alt="Tênis"
          />
          <strong>Tênis Mizuno Dourado Luxo</strong>
          <span>R$599,90</span>

          <button type="button">
            <div>
              <FiShoppingBag size={24} color="#FFF" />
            </div>

            <span>ADICIONAR NA SACOLA</span>
          </button>
        </li>
        <li>
          <img
            src="https://cdn.awsli.com.br/800x800/1060/1060828/produto/42168015/1ae3f14322.jpg"
            alt="Tênis"
          />
          <strong>Tênis Mizuno Dourado Luxo</strong>
          <span>R$599,90</span>

          <button type="button">
            <div>
              <FiShoppingBag size={24} color="#FFF" />
            </div>

            <span>ADICIONAR NA SACOLA</span>
          </button>
        </li>
        <li>
          <img
            src="https://cdn.awsli.com.br/800x800/1060/1060828/produto/42168015/1ae3f14322.jpg"
            alt="Tênis"
          />
          <strong>Tênis Mizuno Dourado Luxo</strong>
          <span>R$599,90</span>

          <button type="button">
            <div>
              <FiShoppingBag size={24} color="#FFF" />
            </div>

            <span>ADICIONAR NA SACOLA</span>
          </button>
        </li>
      </ProductList>
    );
  }
}
