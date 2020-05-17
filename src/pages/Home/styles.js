import styled from 'styled-components';

import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 10px;
    border-radius: 10px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 13px;
      line-height: 15px;
      color: #666;
      text-transform: lowercase;
      margin-bottom: 10px;
    }

    > div {
      margin-top: auto;
      display: flex;
      flex-direction: column;

      button {
        background: #7159c1;
        border: none;
        border-radius: 5px;
        color: #fff;
        overflow: hidden;
        margin-top: auto;

        display: flex;
        align-items: center;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.1, '#7159c1')};
        }

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          background: rgba(0, 0, 0, 0.25);

          span {
            font-size: 15px;
            font-weight: bold;
            color: #fff;
          }
        }

        span {
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-weight: bold;

          svg {
            margin-left: 15px;
          }
        }
      }
    }
  }
`;
