import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { PropsWithChildren } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button";
import cls from "./ImgSlider.scss";

interface SliderProps extends PropsWithChildren {
  className?: string;
}

export const ImgSlider = ({ className }: SliderProps) => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      totalSlides={3}
      className={classNames(cls.Slider, {}, [className])}
      naturalSlideHeight={300}
      interval={5000}
      isIntrinsicHeight={true}
      isPlaying={true}
      infinite={true}
    >
      <Slider>
        <Slide index={0}>
          <Image
            src="/img/home-page/slider-image.png"
            alt="Слайд 1"
            hasMasterSpinner={true}
          />
          <Button className="carousel__buyBtn">Купить</Button>
        </Slide>
        <Slide index={1}>
          <Image
            src="/img/home-page/slider-image.png"
            alt="Слайд 2"
            hasMasterSpinner={true}
          ></Image>
          <Button className="carousel__buyBtn">Купить</Button>
        </Slide>
        <Slide index={2}>
          <Image
            src="/img/home-page/slider-image.png"
            alt="Слайд 3"
            hasMasterSpinner={true}
          />
          <Button className="carousel__buyBtn">Купить</Button>
        </Slide>
      </Slider>
      <DotGroup></DotGroup>
      <ButtonBack>
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0.999999L6 6L1 11"
            stroke="#C8C8C8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ButtonBack>
      <ButtonNext>
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0.999999L6 6L1 11"
            stroke="#C8C8C8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ButtonNext>
    </CarouselProvider>
  );
};
