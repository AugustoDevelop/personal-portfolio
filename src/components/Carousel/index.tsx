import { CarouselItem, CarouselImage, CarouselContainer } from "./style";
import Angular from "../../assets/icons/Angular.svg";
import CSS3 from "../../assets/icons/Css3.svg";
import Git from "../../assets/icons/Git.svg";
import Html5 from "../../assets/icons/Html5.svg";
import Java from "../../assets/icons/Java.svg";
import JavaScript from "../../assets/icons/Javascript.svg";
import Jenkins from "../../assets/icons/Jenkins.svg";
import Kotlin from "../../assets/icons/Kotlin.svg";
import Mongo from "../../assets/icons/Mongodb.svg";
import Next from "../../assets/icons/Nextdotjs.svg";
import NextDark from "../../assets/icons/Nextdotjs-dark.svg";
import PostrgressSql from "../../assets/icons/PostgreSql.svg";
import ReactLogo from "../../assets/icons/React.svg";
import SpringBoot from "../../assets/icons/SpringBoot.svg";
import TypeScript from "../../assets/icons/Typescript.svg";
import Slider from "react-slick";
import { useContext } from "react";
import { ThemeContext } from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrossel() {
  const { title } = useContext(ThemeContext);

  const nextIcon = title === "dark" ? NextDark : Next;

  const carouselItems = [
    { icon: Angular, name: "Angular" },
    { icon: CSS3, name: "CSS3" },
    { icon: Git, name: "Git" },
    { icon: Html5, name: "HTML5" },
    { icon: Java, name: "Java" },
    { icon: JavaScript, name: "JavaScript" },
    { icon: Jenkins, name: "Jenkins" },
    { icon: Kotlin, name: "Kotlin" },
    { icon: Mongo, name: "MongoDB" },
    { icon: nextIcon, name: "Next.js" },
    { icon: PostrgressSql, name: "Postrgress" },
    { icon: ReactLogo, name: "React" },
    { icon: SpringBoot, name: "Spring Boot" },
    { icon: TypeScript, name: "TypeScript" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 13,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
  };
  
  return (
    <CarouselContainer>
      <h2>Algumas tecnologias que tenho conhecimento</h2>
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <CarouselItem key={item.icon}>
            <CarouselImage src={item.icon} alt={`${item.name}`} />
            <span>{item.name}</span>
          </CarouselItem>
        ))}
      </Slider>
    </CarouselContainer>
  );
}
