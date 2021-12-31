import React from "react";
import { Container, Options, Option, Main, Btn, Next } from "./Style";
import { BsArrowRight } from "react-icons/bs";
import Title from "../frequent/Title";

function ServicesTwo({ items }) {
  return (
    <Main>
      <Title content="NOS SERVICES" />
      <h1>Kaalix est forte avec vous ! </h1>
      <Container style={{ background: "#f9f9fd" }}>
        <Options>
          {items &&
            items.map((it, index) => (
              <div className="cover" key={index}>
                <Option>
                  <div>
                    <img src={it.img} alt="" />
                  </div>
                  <div>
                    <h2>{it.title}</h2>
                    <p>{it.desc}</p>
                  </div>
                  <Btn>
                    <span>Devenir partenaire</span>
                    <Next>
                      <BsArrowRight />
                    </Next>
                    <span className="overl"></span>
                  </Btn>
                </Option>
              </div>
            ))}
        </Options>
      </Container>
    </Main>
  );
}

export default ServicesTwo;
