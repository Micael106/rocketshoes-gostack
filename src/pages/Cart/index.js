import React, { Component } from 'react';
import { FiMinusCircle, FiPlusCircle, FiTrash } from 'react-icons/fi';
import { Container, ProductTable, ProductTotal } from './styles';

export default class Cart extends Component {
  render() {
    return (
      <Container>
        <ProductTable>
          <thead>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://cdn.awsli.com.br/800x800/1060/1060828/produto/42168015/1ae3f14322.jpg"
                  alt="Tênis"
                />
              </td>
              <td>
                <strong>Tênis Mizuno Dourado Luxo</strong>
                <span>R$599,90</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <FiMinusCircle size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={2} />
                  <button type="button">
                    <FiPlusCircle size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$259,90</strong>
              </td>
              <td>
                <button type="button">
                  <FiTrash size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
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
}
