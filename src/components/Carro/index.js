import { Component } from 'react'
import BubbleAlert from '../BubbleAlert'
import './carro.css'
class Carro extends Component {

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
        <button className='carro'>
          Card
        </button>
      </div>
    )
  }
}
export default Carro