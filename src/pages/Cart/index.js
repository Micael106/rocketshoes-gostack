import React from 'react';
import { connect } from 'react-redux';
import { FiMinusCircle, FiPlusCircle, FiTrash } from 'react-icons/fi';
import { Container, ProductTable, ProductTotal } from './styles';

function Cart({ dispatch, cart }) {
  const removeFromCart = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      productId,
    });
  };

  return (
    <Container>
      <ProductTable>
        <thead>
          <th> </th>
          <th>PRODUTO</th>
          <th>QUANTIDADE</th>
          <th>SUBTOTAL</th>
          <th> </th>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <FiMinusCircle size={20} color="#7159c1" />
                  </button>
                  <span>{product.amount}</span>
                  <button type="button">
                    <FiPlusCircle size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$259,90</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <FiTrash size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <ProductTotal>
          <span>TOTAL</span>
          <strong>R$259,90</strong>
        </ProductTotal>
      </footer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
