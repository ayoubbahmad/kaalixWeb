import React, { useEffect } from "react";
import Nav from "./nav";
import GlobalStyle from "./GlobalStyle";
import Landing from "./landing";
import { getData } from "../redux/actions/kaalix";
import { useDispatch, useSelector } from "react-redux";
import kaalixS from "../redux/selectors/kaalixSelector";
import Sli from "./newSlide";
import Services from "./services";
import Footer from "./footer";
import PhoneApp from "./app";
import ServicesTwo from "./servicesTwo";
function Home() {
  const { landing, suggestion, promotion, service, servicesTwo, footer } =
    useSelector(kaalixS);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Landing items={landing} />
      <Sli items={suggestion} back="#f9f9fd">
        Suggestion
      </Sli>
      <Sli items={promotion} back="#fff">
        Promotion
      </Sli>
      <Services items={service} />
      <PhoneApp />
      <ServicesTwo items={servicesTwo} />
      <Footer items={footer} />
    </>
  );
}

export default Home;
