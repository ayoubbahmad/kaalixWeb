import React from "react";
import { Container, Options, Option, Main, Next, Prev } from "./Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "./slideSettings";

function Sli({ items = [], children, back }) {
  return (
    <Main back={back}>
      <Container className="container">
        <h1>{children}</h1>
        <Slider {...settings}>
          {items &&
            items.map((it, index) => (
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
        </Slider>
      </Container>
    </Main>
  );
}

export default Sli;
