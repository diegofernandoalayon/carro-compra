import { Component } from 'react'
import Button from '../Button'
import './producto.css'
import SelectorCantidad from '../SelectorCantidad'
class Producto extends Component {
  state = {
    cantidad: 1
  }

  incrementar = () => {
    const newCantidad = this.state.cantidad + 1
    return this.setState({
      cantidad: newCantidad
    })
  }
  decrementar = () => {
    const newCantidad = this.state.cantidad - 1 || 1
    return this.setState({
      cantidad: newCantidad
    })
  }
  render() {
    const { producto, agregarAlCarro } = this.props 
    return(
      <div className='product-container'>
        <img className='product-img' src={producto.img} alt={` for ${producto.name}`}  />
        <div className='product-text'>
          <div >
            <h4>
              {producto.name}
            </h4>
            <p className='product-cant'>
              <span>
                {producto.price}
              </span>
              <SelectorCantidad 
                elemento={this.state}
                decrementar={this.decrementar}
                incrementar={this.incrementar}
              />
            </p>
          </div>
          <Button onClick={()=> agregarAlCarro(producto)}>Agregar al carro</Button>
        </div>
      </div>
    )
  }
  
}

export default Producto