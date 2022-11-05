import { Component } from 'react'
import BubbleAlert from '../BubbleAlert'
import './carro.css'
class Carro extends Component {

  render() {
    
    return(
      <div>
        <span className='bubble'>
          <BubbleAlert value={10} />
        </span>
        <button className='carro'>
          Card
        </button>
      </div>
    )
  }
}
export default Carro