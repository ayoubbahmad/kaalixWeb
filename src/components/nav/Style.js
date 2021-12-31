import styled, { keyframes } from "styled-components";

const wave = keyframes`
100%{
  width: 90%;
opacity: 0
}
`;

export const Container = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 15px;
  box-shadow: 1px 6px 15px rgba(0, 0, 0, 0.15);
  z-index: 2;
  position: relative;
`;
export const Bowl = styled.div`
  height: 100%;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .borgerBar {
    color: #444;
    cursor: pointer;
    display: none;
    @media (max-width: 768px) {
      justify-self: center;
      display: block;
    }
  }
  img {
    height: 32px;
    @media (max-width: 768px) {
      justify-self: center;
    }
  }
  ul {
    list-style: none;
    @media (max-width: 768px) {
      width: 0;
      overflow: hidden;
    }
    li {
      display: inline-block;
      margin-right: 15px;
      padding: 16px 28px;
      border-radius: 28px;
      border: 1px solid transparent;
      box-shadow: 1px 3px 5px rgb(0 0 0 / 20%);
      position: relative;
      cursor: pointer;
      .overl {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        display: block;
        width: 0;
        background: linear-gradient(to right, #fff5, #fff);
      }
      &:hover .overl {
        animation: ${wave} 0.3s ease-in-out;
      }
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        line-height: 1;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    li:first-child {
      background: #4b4b4a;
    }
    li:last-child {
      background: #3cb185;
    }
  }
`;
