import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Rocketshoes" />

      <Cart to="/cart">
        <div>
          <strong>Sacola de Compras</strong>
          <span>3 itens</span>
        </div>
        <FiShoppingBag size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
