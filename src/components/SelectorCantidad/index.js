import { Component } from 'react'
import './selectorCantidad.css'
class SelectorCantidad extends Component {

  render(){
    const { elemento, decrementarCarro, incrementarCarro } = this.props
    return(
      <>
        <span className='detalles-cant'>
          <button className='detalles-btn' onClick={() => decrementarCarro(elemento)}>
            -
          </button>
          <span>
            {elemento.cantidad}
          </span>
          <button className='detalles-btn' onClick={()=> incrementarCarro(elemento)}>
            +
          </button>
        </span>
      </>
    )
  }
}
export default SelectorCantidad