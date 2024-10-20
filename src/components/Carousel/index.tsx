import { 
  CarouselItem, 
  CarouselImage, 
  CarouselContainer, 
  CarouselText, 
  H2Text 
} from "./style";
import Angular from "../../assets/icons/Angular.svg";
import CSS3 from "../../assets/icons/Css3.svg";
import Git from "../../assets/icons/Git.svg";
import Html5 from "../../assets/icons/Html5.svg";
import Java from "../../assets/icons/Java.svg";
import JavaScript from "../../assets/icons/Javascript.svg";
import Kotlin from "../../assets/icons/Kotlin.svg";
import Next from "../../assets/icons/Nextdotjs.svg";
import NextDark from "../../assets/icons/Nextdotjs-dark.svg";
import PostrgressSql from "../../assets/icons/PostgreSql.svg";
import ReactLogo from "../../assets/icons/React.svg";
import SpringBoot from "../../assets/icons/SpringBoot.svg";
import TypeScript from "../../assets/icons/Typescript.svg";
import Aws from "../../assets/icons/Aws.svg";
import AwsDark from "../../assets/icons/AwsDark.svg";
import Sonarqube from "../../assets/icons/Sonarqube.svg";
import SonarqubeDark from "../../assets/icons/SonarqubeDark.svg";
import Kafka from "../../assets/icons/Kafka.svg";
import KafkaDark from "../../assets/icons/KafkaDark.svg";
import Slider from "react-slick";
import { useContext } from "react";
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const { t } = useTranslation()
  const { title } = useContext(ThemeContext) || {};

  const nextIcon = title === "dark" ? NextDark : Next;
  const awsIcon = title === "dark" ? AwsDark : Aws;
  const sonarqubeIcon = title === "dark" ? SonarqubeDark : Sonarqube;
  const kafkaIcon = title === "dark" ? KafkaDark : Kafka;

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
    { icon: TypeScript, name: "TypeScript" },
    { icon: awsIcon, name: "AWS" },
    { icon: sonarqubeIcon , name: "Sonarqube" },
    { icon: kafkaIcon , name: "Kafka" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 14,
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
