import { Component } from 'react'
import Logo from '../Logo'
import './navbar.css'
class Navbar extends Component {

  render() {
    return(
      <nav className='nav-bar'>
        <Logo />
        <p>Carro</p>
      </nav>
    )
  }
}

export default Navbar