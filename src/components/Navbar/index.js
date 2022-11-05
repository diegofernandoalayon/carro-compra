import { Component } from 'react'
import Logo from '../Logo'
import Carro from '../Carro'
import './navbar.css'
class Navbar extends Component {

  render() {
    return(
      <nav className='nav-bar'>
        <Logo />
        <Carro />
      </nav>
    )
  }
}

export default Navbar