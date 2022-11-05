import { Component } from 'react'
import BubbleAlert from '../BubbleAlert'
import './carro.css'
class Carro extends Component {

  render() {
    
    return(
      <div>
        <span className='bubble'>
          <BubbleAlert />
        </span>
        <button className='carro'>
          Card
        </button>
      </div>
    )
  }
}
export default Carro