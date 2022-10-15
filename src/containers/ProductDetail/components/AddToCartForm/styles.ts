import styled from 'styled-components';

export const AddToCartWrapper = styled.div`
  .btn_cart {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 20px;
    border: 2px solid rgb(241, 241, 241);
    background-color: #fff;
    font-weight: 600;
    color: rgb(0, 158, 127);
    font-family: 'Font Awesome 5 Free';
    cursor: pointer;
    transition: all 0.3s ease 0s;
    margin-right: 17px;
    padding: 0px 20px;
    line-height: 32px;
    height: 36px;
    font-size: 15px;
  }

  .btn_cart:hover {
    color: #fff;
    background-color: rgb(0, 158, 127);
    border: none;
  }
  .btn_cart i {
    margin-right: 5px;
    font-size: 20px;
  }
  .title {
    font-family: Lato, sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: rgb(66, 69, 97);
    margin-bottom: -9px;
    margin-top: 30px;
  }
`;
