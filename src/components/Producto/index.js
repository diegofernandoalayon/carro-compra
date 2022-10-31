import { Component } from 'react'
import Button from '../Button'
import './producto.css'
class Producto extends Component {

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
            <p>
              {producto.price}
            </p>
          </div>
          <Button onClick={agregarAlCarro}>Agregar al carro</Button>
        </div>
      </div>
    )
  }
  
}

export default Producto