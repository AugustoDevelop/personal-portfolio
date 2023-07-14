
import { SectionTitle } from "../SectionTitle"
import { Container } from "./style"

export function Info(){
  return(
    <Container>
      <SectionTitle text="Languages"/>
      <div className="languages-info">
        <span>🇧🇷 PT-BR - Native Speaker</span>
        <span>🇺🇸 EN - Basic</span>
        <span>🇺🇸 ES - Basic</span>
      </div>
      <SectionTitle text="Education"/>
      <div className="educational-info">
        <span className="iconeGraduated">🎓</span>
        <span>Graduated in Computer Science - Faculdade dos Guararapes</span>
      </div>
      
    </Container>
  )
}