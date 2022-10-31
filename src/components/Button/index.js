import { Component } from 'react'
import './button.css'
class Button extends Component {

  render() {
    return(
      <button className='btn-1' {...this.props} />
    )
  }
}
export default Button