import { Component } from 'react'
import './selectorCantidad.css'
class SelectorCantidad extends Component {

  render(){
    const { elemento, decrementar, incrementar } = this.props
    return(
      <>
        <span className='detalles-cant'>
          <button className='detalles-btn' onClick={() => decrementar(elemento)}>
            -
          </button>
          <span>
            {elemento.cantidad}
          </span>
          <button className='detalles-btn' onClick={()=> incrementar(elemento)}>
            +
          </button>
        </span>
      </>
    )
  }
}
export default SelectorCantidad