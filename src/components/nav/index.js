import React from "react";
import { Container, Bowl } from "./Style";
import { FaBars } from "react-icons/fa";

function Nav() {
  return (
    <Container>
      <Bowl>
        <div className="borgerBar">
          <FaBars size="32" />
        </div>
        <img src="/image/nav/1.png" alt="" />
        <ul>
          <li>
            <a href="">S'inscrire </a>
            <span className="overl"></span>
          </li>
          <li>
            <a href="">Se connecter</a>
            <span className="overl"></span>
          </li>
        </ul>
      </Bowl>
    </Container>
  );
}

export default Nav;
