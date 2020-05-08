import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    margin-right: 10px;

    strong {
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #aaa;
      margin-top: 5px;
    }
  }
`;
