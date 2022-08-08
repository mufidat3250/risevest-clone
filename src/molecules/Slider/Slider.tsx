import React, { Component } from "react";
// import { investors } from '../../data';

import Slider from "react-slick";
import LeftCaretIcon from "../../atom/Vectors/LeftCaretIcon";
import RightCaretIcon from "../../atom/Vectors/RightCaretIcon";

const Sliders = ({
  children,
  heading,
}: {
  children?: React.ReactNode;
  heading?: string;
}) => {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <Slider {...settings} className="">
        {children}
      </Slider>
    </div>
  );
};

export default Sliders;

export const ButtonSlider = ({ children }: { children: React.ReactNode }) => {
  let settings = {
    Infinity: true,
    dots: true,
    slideToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings} className="relative w-full">
        {children}
      </Slider>
    </div>
  );
};

const SampleNextArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <div
      className=" absolute -right-[20px] top-[0] bottom-0  flex justify-center items-center "
      onClick={onClick}
    >
      <RightCaretIcon />
    </div>
  );
};

const SamplePreviousArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <div
      className=" cursor-pointer absolute -left-[20px] top-[0] bottom-0  flex justify-center items-center"
      onClick={onClick}
    >
      <LeftCaretIcon />
    </div>
  );
};
