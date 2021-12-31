import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  font-size: 14px;
  margin: 0 auto 10px;
  width: fit-content;
  color: #1b1b1b;
  position: relative;
  &::after,
  &::before {
    content: " ";
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: #a5b7d2;
    border-radius: 50%;
    top: 7px;
  }
  &::before {
    left: -20px;
  }
  &::after {
    right: -20px;
  }
`;
function Title({ content }) {
  return <H3>{content}</H3>;
}

export default Title;
