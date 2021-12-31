import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Next, Prev } from "./Style";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Prev onClick={onClick}>
      <BsArrowLeft />
    </Prev>
  );
}
function NextArrow(props) {
  const { onClick } = props;
  return (
    <Next onClick={onClick}>
      <BsArrowRight />
    </Next>
  );
}

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
      },
    },
  ],
};
