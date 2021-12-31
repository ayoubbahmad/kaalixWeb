import axios from "axios";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// const Rf = keyframes`
// 0% {
// transform: transition(100px);
// opacity: 0

// }
// 100%{
// transform: transition(0);
// opacity: 1

// }
// `;
const Cont = styled.div`
  display: flex;
  margin: 20px auto;
  overflow: hidden;
  border: 3px solid #f00;
  width: 100%;
  height: 100%;
  div {
    /* transition: all 0.8s; */
    /* transform: translate(${(props) => (props.anim ? "0px" : "200px")}); */
    animation: Rf 0.9s;
    border: 1px solid #f00;
  }
`;
const Div = styled.div`
  position: relative;
  height: 400px;
  width: 500px;
  button {
    position: absolute;
    top: 50%;
  }
  button:first-child {
    left: 0;
  }
  button:last-child {
    right: 0;
  }
`;
function Br() {
  const [state, setState] = useState([]);
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (anim == true) {
        setAnim(false);
        console.log(anim);
      }
    }, 800);
  });
  useEffect(() => {
    axios("/data.json").then((res) => setState(res.data));
  }, []);
  const nextFun = () => {
    const [a, ...rest] = state;

    setState([...rest, a]);
    setAnim(true);
  };
  const prevFun = () => {
    let sta = [...state];
    let z = sta.pop(sta.length - 1);
    setState([z, ...sta]);
  };
  return (
    <Div>
      <Cont anim={anim}>
        {state.map((it) => (
          <div>
            <img src={it.img} alt="" />
          </div>
        ))}
      </Cont>
      <button onClick={prevFun}>prev</button>
      <button onClick={nextFun}>next</button>
    </Div>
  );
}

export default Br;
