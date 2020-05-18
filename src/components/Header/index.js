import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FiShoppingBag } from 'react-icons/fi';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Sacola de Compras</strong>
          <span>
            {cartSize} {cartSize > 1 ? 'itens' : 'item'}
          </span>
        </div>
        <FiShoppingBag size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
