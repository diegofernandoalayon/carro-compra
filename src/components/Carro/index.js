import { Component } from 'react'
import BubbleAlert from '../BubbleAlert'
import DetallesCarro from '../DetallesCarro'
import './carro.css'
class Carro extends Component {
  state = {
    showCar : false
  }
  render() {
    const { carro } = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return(
      <div>
        <span className='bubble'>
          {
            cantidad !== 0 && <BubbleAlert value={cantidad} />
          }
          
        </span>
        <button className='carro' onClick={() => this.setState({showCar : !this.state.showCar})}>
          Card
        </button>
        {
          this.state.showCar && <DetallesCarro carro = {carro} />
        }
        
      </div>
    )
  }
}
export default Carro