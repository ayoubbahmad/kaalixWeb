import styled, { css } from "styled-components";

export const Main = styled.div`
  background-color: #f9f9fd;
  position: relative;
  padding: 70px 0 100px;
  h1 {
    font-weight: 700;
    font-size: 14px;
    margin: 0 0 50px;
    color: #1b1b1b;
    text-align: center;
  }
`;
export const Container = styled.div`
  background-position: center;
`;
export const Options = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  .cover {
    flex-basis: 33%;
    margin: 0 auto;
    @media (max-width: 1024px) {
      flex-basis: 50%;
    }

    @media (max-width: 768px) {
      flex-basis: 100%;
    }
  }
`;
export const Option = styled.div`
  transition: all 0.4s;
  padding: 25px 40px 55px;
  border-radius: 15px;
  margin: 0 15px;
  div:first-of-type {
    text-align: center;
    height: 215px;
    margin: 0;
  }
  div:nth-of-type(2) {
    h2 {
      color: #333;
      text-align: center;
    }
    p {
      color: #606060;
      font-size: 16px;
      margin-top: 15px;
      font-family: tahoma, sans-serif;
      letter-spacing: 1px;
      text-align: center;
      line-height: 1.5;
    }
  }
  &:hover {
    box-shadow: rgba(42, 67, 113, 0.15) 8px 8px 30px;
    background-color: #fff;
  }
`;
