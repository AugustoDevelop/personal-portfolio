import { Component } from 'react'
import Logo from '../../assets/hero-image.png';
import { Container } from './style';

export default class ShortDescription extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Hi, i´m Augusto! 👋</h1>
          <h2>Software Engineer Full Stack</h2>
        </div>
        <img  className="avatar-home" 
          alt="Foto de Augusto"
          src={Logo} 
          style={{ height: '250px', width: '250px' }}
        />
      </Container>
      )
    }
}