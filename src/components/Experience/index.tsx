import { SectionTitle } from "../SectionTitle/index.tsx"
import { Container, ContainerSkill } from "./style.ts"

import Angular from "../../assets/icons/Angular.svg";
import Java from "../../assets/icons/Java.svg";
import Kotlin from "../../assets/icons/Kotlin.svg";
import SpringBoot from "../../assets/icons/SpringBoot.svg";
import TypeScript from "../../assets/icons/Typescript.svg";

export function Experience(){
  const xp = [
    { icon: Angular, name: "Angular", years: "2 years", measure: 2 },
    { icon: TypeScript, name: "TypeScript", years: "2 years", measure: 2 },
    { icon: SpringBoot, name: "SpringBoot", years: "3 years", measure: 3 },
    { icon: Java, name: "Java", years: "3 years", measure: 3 },
    { icon: Kotlin, name: "Kotlin", years: "2 years", measure: 2 }
  ];

  return(
    <Container>
      <SectionTitle text="Experience"/>
      <p>+3 years working as a Software Developer, in companies such as Accenture, Fundaj, and Effetives Sistema.</p>
      <div className="experience-time">
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
      
      </div>
    </Container>
  )
}