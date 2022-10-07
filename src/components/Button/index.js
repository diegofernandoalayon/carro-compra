import { Component } from 'react'

class Button extends Component {

  render() {
    const {onClick, children} = this.props
    return(
      <button onClick={onClick}>{children}</button>
    )
  }
}
export default Button