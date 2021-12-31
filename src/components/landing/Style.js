import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-size: cover;
  background-position-y: 15%;
  padding: 130px 0;
  overflow: hidden;
  div {
    margin: 0 auto;
    text-align: center;
    h1 {
      font-weight: 900;
      font-size: 56px;
      margin-bottom: 70px;
      color: #1b1b1b;
    }
  }
`;
export const Options = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Option = styled.div`
  padding: 21px 9px 15px;
  background-color: #fff;
  border-radius: 50px 50px 0 50px;
  width: 130px;
  height: 134px;
  transition: all 0.4s;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  margin: 0 15px 5px;
  cursor: pointer;
  img {
    width: 75px;
    height: 70px;
  }
  p {
    white-space: nowrap;
    color: #4b4b4b;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    padding: 0 10px;
  }
  &:hover p {
    color: #000;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
