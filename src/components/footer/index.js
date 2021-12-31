import React from "react";
import { Container, Options, Option, Main, Arc } from "./Style";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer({ items }) {
  return (
    <Main>
      <Arc></Arc>
      <div className="contHolder">
        <Container className="container">
          <Options>
            {items &&
              items.map((it, index) => (
                <Option key={index}>
                  <div>
                    <i className={it.img} />
                  </div>
                  <div>
                    <p>{it.title}</p>
                    <p>{it.desc}</p>
                  </div>
                </Option>
              ))}
          </Options>
          <p className="copyRight">
            This template was cloned from www.kaalix.com
          </p>
          <div className="socialMedia">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </Container>
      </div>
    </Main>
  );
}

export default Footer;
