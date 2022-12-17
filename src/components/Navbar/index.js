import { Component } from 'react'
import Logo from '../Logo'
import Carro from '../Carro'
import './navbar.css'
class Navbar extends Component {

  render() {
    const { carro, eliminarDelCarro, incrementarCarro, decrementarCarro, vaciarCarro } = this.props
    return(
      <nav className='nav-bar'>
        <Logo />
        <Carro 
          carro={carro}  
          eliminarDelCarro={eliminarDelCarro} 
          incrementarCarro={incrementarCarro}
          decrementarCarro={decrementarCarro}
          vaciarCarro={vaciarCarro}
        />
      </nav>
    )
  }
}

export default Navbar