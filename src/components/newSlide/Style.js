import styled, { css } from "styled-components";

export const Main = styled.div`
  background-color: ${(props) => props.back};
  position: relative;
  overflow: hidden;
`;
export const Container = styled.div`
  h1 {
    font-weight: 900;
    font-size: 32px;
    padding: 2.5rem 0 50px;
    color: #1b1b1b;
    text-align: center;
  }
`;
export const Option = styled.div`
  transition: all 0.4s;
  padding: 0 15px;
  cursor: pointer;
  margin-bottom: 15px;
  &:hover img {
    transform: scale(1.05);
  }
  div:first-child {
    overflow: hidden;
    border-radius: 20px;
    img {
      transition: all 0.4s;
    }
  }

  div:nth-of-type(2) {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px 15px;
    margin: -15px 5px 0;
    position: relative;
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
    h2 {
      color: #333;
    }
    p {
      color: #606060;
      font-size: 16px;
      margin-top: 15px;
      font-family: tahoma, sans-serif;
      letter-spacing: 1px;
    }
  }
`;
export const Next = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: absolute;
  right: -35px;
  top: 165px;
  border: none;
  outline: none;
  background-color: #fff;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
  color: #a5b7d2;
  cursor: pointer;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  &:hover {
    background-color: #a5b7d2;
    color: #fff;
  }
`;
export const Prev = styled(Next)`
  left: -35px;
`;
