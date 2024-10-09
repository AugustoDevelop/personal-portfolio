import { Component } from 'react'
import { Container } from './style';
import ShortDescription from '../ShortDescription';
import About from '../../pages/About/About';

export default class MainComponent extends Component {
  render() {
    return (
    <Container>
      <ShortDescription />  
    </Container>
    )
  }
}