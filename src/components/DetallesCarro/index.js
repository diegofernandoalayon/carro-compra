import { Component } from 'react'
import Trash from '../Icons/Trash'
import './detallesCarro.css'
import SelectorCantidad from '../SelectorCantidad'
class DetallesCarro extends Component {

  render(){
    const { carro, eliminarDelCarro, incrementarCarro, decrementarCarro, vaciarCarro } = this.props
    return(
      <div className='detalles-carro'>
        <ul className='detalles-ul'>
          {
            carro.map(x => 
            <li 
            key={x.name}
            className='detalles-li'
            >
              <img alt={`for ${x.name}`} src={x.img} width='50px' height='38px'/>
              {x.name} 
              <span className='detalles-price'>
                ${x.price}
              </span>
              <SelectorCantidad 
                elemento={x}
                decrementar={decrementarCarro}
                incrementar={incrementarCarro}
              />
              <button className='detalles-delete' onClick={() => eliminarDelCarro(x)}>
                <Trash />
              </button>  
            </li>)
          }
          <li className='detalles-total'>
            <div>
              <button className='detalles-vaciar' onClick={() => vaciarCarro()}>
                Vaciar carro
                <Trash />
              </button>
            </div>
            <div>
              <span>total:</span> 
              <span>
                $
                {
                  carro.reduce((ac, el) => ac+(el.price*el.cantidad),0)
                }
              </span>
            </div>
          </li>
        </ul>

      </div>
    )
  }
}

export default DetallesCarro