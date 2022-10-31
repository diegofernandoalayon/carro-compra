import { Component } from 'react'
import './layout.css'
class Layout extends Component {
  render() {
    return(
      <div>
        <div className='layout-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout