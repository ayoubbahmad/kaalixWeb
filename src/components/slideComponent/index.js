import React, { Children, useEffect, useState } from "react";
import { Container, Options, Option, Main, Next, Prev } from "./Style";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

function Sli({ items = [], children, back }) {
  const [elemants, setElemants] = useState([]);
  const [animNext, setAnimNext] = useState(false);
  const [animPrev, setAnimPrev] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (items.length) {
      setElemants([...items]);
    }
  }, [items.length]);

  const nextEl = () => {
    let [a, ...rest] = elemants;
    setElemants([...rest, a]);
    setAnimNext(true);
    defaultAnim();
    setDisabled(true);
  };

  const prevEl = () => {
    setAnimPrev(true);
    setTimeout(() => {
      let state = [...elemants];
      let z = state.pop(state.length - 1);
      setElemants([z, ...state]);
    }, 800);
    setAnimPrev(true);
    defaultAnim();
    setDisabled(true);
  };
  const defaultAnim = () => {
    setTimeout(() => {
      setAnimNext(false);
      setAnimPrev(false);
      setDisabled(false);
    }, 800);
  };

  return (
    <Main back={back}>
      <Container className="container">
        <h1>{children}</h1>
        <Options animNext={animNext} animPrev={animPrev}>
          {elemants &&
            elemants.map((it, index) => (
              <Option key={index}>
                <div>
                  <img src={it.img} alt="" />
                </div>
                <div>
                  <h2>{it.title}</h2>
                  <p>{it.desc}</p>
                </div>
              </Option>
            ))}
        </Options>
      </Container>

      <Prev onClick={prevEl} disabled={disabled}>
        <BsArrowLeft />
      </Prev>
      <Next onClick={nextEl} disabled={disabled}>
        <BsArrowRight />
      </Next>
    </Main>
  );
}

export default Sli;
