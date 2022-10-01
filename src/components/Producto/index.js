import { Component } from 'react'

class Producto extends Component {

  render() {
    const { producto, agregarAlCarro } = this.props 
    return(
      <div style={{display:'flex', flexDirection:'column'}}>
        <img width={300} src={producto.img} alt={` for ${producto.name}`}  />
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div >
            <h4>
              {producto.name}
            </h4>
            <p>
              {producto.price}
            </p>
          </div>
          <button onClick={agregarAlCarro} style={{height: '30px'}}>Agregar al Carro</button>
        </div>
      </div>
    )
  }
  
}

export default Producto