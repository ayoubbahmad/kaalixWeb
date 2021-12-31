import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  .biggestCircle {
    width: 50%;
  }
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    /* @media (max-width: 768px) {
      width: 100%;
    } */
    .one {
      width: 50%;
      position: relative;
      height: 800px;
      @media (max-width: 768px) {
        width: 100%;
      }
      .phone {
        width: 300px;
        position: relative;
      }
      .feed {
        position: absolute;
        width: 275px;
        margin: 20px 14px;
        height: 560px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
    .two {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 40%;
      @media (max-width: 768px) {
        width: 100%;
        margin: 20px auto;
      }
      .btns {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      h2 {
        font-weight: 900;
        margin: 0 0 20px;
        font-size: 2rem;
        color: #1a1b1e;
      }
      p {
        margin-bottom: 45px;
        color: #606060;
      }
    }
  }
`;
export const Button = styled.div`
  background: url(${(props) => props.back});
  background-position: center center;
  background-size: 104% 100%;
  cursor: pointer;
  width: 180px;
  height: 55px;
  margin: 7px;
  border-radius: 10px;
  &:first-of-type {
    background-size: 135% 149%;
  }
`;
