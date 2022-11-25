import { Component } from 'react'
import Logo from '../Logo'
import Carro from '../Carro'
import './navbar.css'
class Navbar extends Component {

  render() {
    const { carro, eliminarDelCarro } = this.props
    return(
      <nav className='nav-bar'>
        <Logo />
        <Carro 
          carro={carro}  
          eliminarDelCarro={eliminarDelCarro} 
        />
      </nav>
    )
  }
}

export default Navbar