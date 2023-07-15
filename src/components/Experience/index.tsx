import { SectionTitle } from "../SectionTitle/index.tsx"
import { Container } from "./style.ts"

export function Experience(){
  
  const currentDate = new Date();
  const referenceDate = new Date("2019-06-01");
  const diffInYears = currentDate.getFullYear() - referenceDate.getFullYear();

  return(
    <>
      <Container>
        <SectionTitle text="Experience"/>
        <p>+{diffInYears} years working as a Software Developer, in companies such as Accenture, Fundaj, and Effetives Sistema.</p>
      </Container>
      {/* <Carrossel /> */}
    </>
  )
}