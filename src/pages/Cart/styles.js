import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;
      background: #7159c1;
      color: #fff;
      padding: 12px;
      border-radius: 4px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      border-radius: 4px;
      color: #333;
      margin: 0;
      padding: 6px;
      width: auto;
      height: auto;
      text-align: center;
      font-size: 13px;
    }
  }

  button {
    background: none;
    border: none;
    padding: 6px;
  }
`;

export const ProductTotal = styled.div`
  span {
    font-size: 12px;
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 25px;
    margin-left: 3px;
  }
`;
