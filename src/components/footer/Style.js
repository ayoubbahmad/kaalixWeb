import styled, { css } from "styled-components";

export const Main = styled.div`
  background-color: #f0f6ff;
  overflow: hidden;
  .contHolder {
    background-color: #4b4b4a;
    width: 100%;
    padding: 0px 0 200px;
  }
`;
export const Arc = styled.div`
  background-color: #4b4b4a;
  width: 120%;
  height: 200px;
  border-radius: 70% 70% 0px 0px;
  margin-left: -10%;
`;
export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0 !important;
  .copyRight {
    color: #fff;
    font-size: 14px;
  }
  .socialMedia {
    margin-top: 50px;
    span {
      cursor: pointer;
      margin: 0 5px;
      width: 26px;
      height: 26px;
      font-size: 14px;
      color: #555;
      border-radius: 50%;
      background: #fff;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s ease-in-out;
      :hover {
        transform: translateY(-5px);
      }
    }
  }
`;
export const Options = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Option = styled.div`
  text-align: center;
  margin-bottom: 50px;
  color: #fff;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }

  &:nth-of-type(2) {
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
  }

  div:first-of-type {
    margin: 0 0 25px;
    color: #37b285;
    font-size: 37px;
  }
  div:nth-of-type(2) {
    p:first-of-type {
      font-size: 20px;
      font-weight: 500;
    }
    p:last-of-type {
      font-size: 16px;
      margin-top: 15px;
      font-family: "Roboto", sans-serif;
      letter-spacing: 1px;
    }
  }
`;
