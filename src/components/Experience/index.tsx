import { SectionTitle } from "../SectionTitle/index.tsx"
import { Container, ContainerSkill } from "./style.ts"

import Angular from "../../assets/icons/Angular.svg";
import Java from "../../assets/icons/Java.svg";
import Kotlin from "../../assets/icons/Kotlin.svg";
import SpringBoot from "../../assets/icons/SpringBoot.svg";
import TypeScript from "../../assets/icons/Typescript.svg";
import Carrossel from "../Carousel/index.tsx";

export function Experience(){
  
  const currentDate = new Date();
  
  const referenceDate = new Date("2019-06-01");
  const getStartedAccenture = new Date("2020-11-02")

  const diffInYears = currentDate.getFullYear() - referenceDate.getFullYear();
  const diffAcc = currentDate.getFullYear() - getStartedAccenture.getFullYear();

  const xp = [
    { icon: Angular, name: "Angular", years: diffAcc + " years", measure: diffAcc },
    { icon: TypeScript, name: "TypeScript", years: diffAcc + " years", measure: diffAcc },
    { icon: SpringBoot, name: "SpringBoot", years: diffAcc + " years", measure: diffAcc },
    { icon: Java, name: "Java", years: "2 years", measure: 2 },
    { icon: Kotlin, name: "Kotlin", years: diffAcc + " years", measure: diffAcc }
  ];

  return(
    <>
      <Container>
        <SectionTitle text="Experience"/>
        <p>+{diffInYears} years working as a Software Developer, in companies such as Accenture, Fundaj, and Effetives Sistema.</p>
        {/* <div className="experience-time">
          {xp.map((item) => (
            <ContainerSkill key={item.icon}>
              <img
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
              />
              <div className="experience-unit">
                <div className={`experience-measure measure-${item.measure}`}>
                  <span>{item.years}</span>
                </div>
              </div>
            </ContainerSkill>
          ))}
        
        </div> */}
      </Container>
      <Carrossel />
    </>
  )
}