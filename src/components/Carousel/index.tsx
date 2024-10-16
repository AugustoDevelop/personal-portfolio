import { 
  CarouselItem, 
  CarouselImage, 
  CarouselContainer, 
  CarouselText, 
  H2Text 
} from "./style";
import Angular from "../../assets/icons/svg/Angular.svg";
import CSS3 from "../../assets/icons/svg/Css3.svg";
import Git from "../../assets/icons/svg/Git.svg";
import Html5 from "../../assets/icons/svg/Html5.svg";
import Java from "../../assets/icons/svg/Java.svg";
import JavaScript from "../../assets/icons/svg/Javascript.svg";
import Kotlin from "../../assets/icons/svg/Kotlin.svg";
import Next from "../../assets/icons/svg/Nextdotjs.svg";
import NextDark from "../../assets/icons/svg/Nextdotjs-dark.svg";
import PostrgressSql from "../../assets/icons/svg/PostgreSql.svg";
import ReactLogo from "../../assets/icons/svg/React.svg";
import SpringBoot from "../../assets/icons/svg/SpringBoot.svg";
import TypeScript from "../../assets/icons/svg/Typescript.svg";
import Slider from "react-slick";
import { useContext } from "react";
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrossel() {
  const { t } = useTranslation()
  const { title } = useContext(ThemeContext) || {};

  const nextIcon = title === "dark" ? NextDark : Next;

  const carouselItems = [
    { icon: Angular, name: "Angular" },
    { icon: CSS3, name: "CSS3" },
    { icon: Git, name: "Git" },
    { icon: Html5, name: "HTML5" },
    { icon: Java, name: "Java" },
    { icon: JavaScript, name: "JavaScript" },
    { icon: Kotlin, name: "Kotlin" },
    { icon: nextIcon, name: "Next.js" },
    { icon: PostrgressSql, name: "Postrgress" },
    { icon: ReactLogo, name: "React" },
    { icon: SpringBoot, name: "Spring Boot" },
    { icon: TypeScript, name: "TypeScript" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 11,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
  };
  
  return (
    <CarouselContainer>
      <H2Text>{t("textCarousel")}</H2Text>
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <CarouselItem key={item.icon}>
            <CarouselImage src={item.icon} alt={`${item.name}`} />
            <CarouselText>{item.name}</CarouselText>
          </CarouselItem>
        ))}
      </Slider>
    </CarouselContainer>
  );
}
