import { Component } from 'react'

class Button extends Component {

  render() {
    return(
      <button {...this.props} />
    )
  }
}
export default Button