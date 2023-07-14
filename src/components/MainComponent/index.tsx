import { Component } from 'react'
import { Container } from './style';
import ShortDescription from '../ShortDescription';
import { Experience } from '../Experience';
import { Info } from '../Information';
import { SocialBtns } from '../SocialBtns';

import Email from "../../assets/icons/Mail.svg";

export default class MainComponent extends Component {
  render() {
    return (
      <Container>
        <ShortDescription />
        <Experience/>
        <Info />
        <div className="buttons">
          <SocialBtns/>
          <a className="btn-primary" href="mailto:teste@gmail.com">
            contact me
            <img src={Email}
              alt='Contact me'
              width={40} height={40}
            />
          </a>
        </div>
      </Container>
    )
  }
}