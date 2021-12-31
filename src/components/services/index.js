import React from "react";
import { Container, Options, Option, Main } from "./Style";
import Title from "../frequent/Title";
function Services({ items }) {
  return (
    <Main>
      <Title content="Services" />
      <Container style={{ backgroundImage: "url(/image/services/back.png)" }}>
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
                </Option>
              </div>
            ))}
        </Options>
      </Container>
    </Main>
  );
}

export default Services;
