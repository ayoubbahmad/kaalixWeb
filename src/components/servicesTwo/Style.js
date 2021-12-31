import styled, { keyframes } from "styled-components";

const wave = keyframes`
100%{
  width: 90%;
opacity: 0
}
`;
export const Main = styled.div`
  background-color: #f9f9fd;
  position: relative;
  padding: 70px 0 100px;
  h1 {
    font-weight: 900;
    font-size: 2rem;
    /* margin: 0 0 20px; */
    color: #1b1b1b;
    text-align: center;
    padding: 24px;
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
  justify-content: space-between;
  .cover {
    flex-basis: 33%;
    padding: 15px;
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
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  box-shadow: rgba(42, 67, 113, 0.15) 8px 8px 30px;
  background-color: #fff;
  background-image: url("/image/hiring/back.png");
  background-repeat: no-repeat;
  background-position: bottom right;
  height: 430px;
  position: relative;
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: translateY(-5px);
  }
  div {
    img {
      width: 100%;
      height: 200px;
    }
  }
  div:first-of-type {
    height: 215px;
    margin: 0;
  }
  div:nth-of-type(2) {
    h2 {
      color: #1a1b1e;
      font-size: 20px;
    }
    p {
      color: #606060;
      font-size: 18px;
      margin-top: 15px;
      font-family: "Roboto", sans-serif;
      line-height: 1.5;
    }
  }
`;
export const Btn = styled.button`
  box-shadow: 12px 12px 20px 0 rgb(0 72 176 / 30%);
  margin-left: -20px;
  border: none;
  outline: none;
  background: #37b285;
  color: #fff;
  position: absolute;
  bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 0 25px 25px 0;
  padding: 5px 5px 5px 20px;
  display: flex;
  align-items: center;
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
`;

export const Next = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: #fff;
  color: #37b285;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  margin-left: 15px;
  font-weight: bold;
`;
