import React from "react";
import { Container, Options, Option } from "./Style";

function Landing({ items }) {
  return (
    <Container style={{ backgroundImage: "url(/image/landing/map.png)" }}>
      <div>
        <h1>On livre tout et partout</h1>
        <Options>
          {items &&
            items.map((it, i) => (
              <Option key={i}>
                <img src={it.img} alt="" />
                <p>{it.desc}</p>
              </Option>
            ))}
        </Options>
      </div>
    </Container>
  );
}

export default Landing;
