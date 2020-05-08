import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

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
