import { Component } from 'react'
import './detallesCarro.css'
class DetallesCarro extends Component {

  render(){
    const { carro } = this.props
    console.log(carro)
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
              <span>
                {x.cantidad}
              </span>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default DetallesCarro