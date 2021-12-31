import React, { useEffect, useRef, useState } from "react";
import { Main, Button } from "./style";

function PhoneApp() {
  const theMain = useRef();
  const feedRef = useRef();

  useEffect(() => {
    let gh = setTimeout(() => {
      phoneCounter(theMain.current.offsetTop - window.innerHeight / 2);
      clearTimeout(gh);
    }, 1000);
  }, []);
  const phoneCounter = (par) => {
    let fd = feedRef.current;
    window.addEventListener("scroll", () => {
      if (par <= window.scrollY) {
        fd.style.transform = `translateY(${par - window.scrollY}px)`;
      }
    });
  };

  return (
    <Main
      style={{
        backgroundImage: "url(/image/app/circle.png)",
        paddingTop: "50px",
        backgroundRepeat: "no-repeat",
      }}
      ref={theMain}
    >
      <div className="container">
        <div className="one">
          <div className="feed">
            <img src="/image/app/feed.jpg" alt="feed" ref={feedRef} />
          </div>
          <img src="/image/app/Ybpdln0gUITDa.png" alt="ph" className="phone" />
        </div>
        <div className="two">
          <h2>Avez-vous l'application ?</h2>
          <p>
            Gardez Kaalix dans votre poche ! Disponible sur l'App Store et
            Google Play.
          </p>
          <div className="btns">
            <Button back="/image/gl.svg"></Button>
            <Button back="/image/app-store.svg"></Button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default PhoneApp;
