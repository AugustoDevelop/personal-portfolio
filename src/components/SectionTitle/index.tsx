import { SectionTitleStyle } from "./style"

interface SectionTitleProps {
  text: string
}

export function SectionTitle({ text } : SectionTitleProps){
  return(
    <SectionTitleStyle>{text}</SectionTitleStyle>
  )
}