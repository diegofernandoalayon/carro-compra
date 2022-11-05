import { Component } from 'react'
import './bubblealert.css'
class BubbleAlert extends Component {

  getNumber(n) {
    if(!n){
      return ' '
    }
    return n > 9 ? '9+' : n
  }

  render(){
    const { value } = this.props
    return(
      <span className='bubbleAlert'>
        {this.getNumber(value)}
      </span>
    )
  }
}
export default BubbleAlert