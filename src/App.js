import { Component } from 'react'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import Title from './components/Title'

class App extends Component {
  state = {
    productos: [
      {name: 'Aceituna', price: 2500, img: '/productos/aceituna.png'},
      {name: 'Aguacate', price: 3500, img: '/productos/aguacate.png'},
      {name: 'Albaricoque', price: 1500, img: '/productos/albaricoque.png'},
      {name: 'Arveja', price: 2500, img: '/productos/arveja.png'},
      {name: 'Bacon', price: 5000, img: '/productos/bacon.png'},
      {name: 'Banano', price: 1300, img: '/productos/banano.png'},
      {name: 'Brocoli', price: 2800, img: '/productos/brocoli.png'},
      {name: 'Cereza', price: 1900, img: '/productos/cereza.png'},
      {name: 'Coco', price: 1200, img: '/productos/coco.png'},
      {name: 'Coliflor', price: 2500, img: '/productos/coliflor.png'},
      {name: 'Frambuesa', price: 2230, img: '/productos/frambuesa.png'},
      {name: 'Fresa', price: 2100, img: '/productos/fresa.png'},
      {name: 'Guayaba', price: 1950, img: '/productos/guayaba.png'},
      {name: 'Kiwi', price: 2900, img: '/productos/kiwi.png'},
      {name: 'Lechuga', price: 2300, img: '/productos/lechuga.png'},
      {name: 'Limas', price: 1950, img: '/productos/limas.png'},
      {name: 'Limones', price: 2000, img: '/productos/limones.png'},
      {name: 'Maiz', price: 2550, img: '/productos/maiz.png'},
      {name: 'Papa', price: 2350, img: '/productos/papa.png'},
      {name: 'Pepino', price: 2700, img: '/productos/pepino.png'},
      {name: 'Tomate', price: 2400, img: '/productos/tomate.png'},
      {name: 'Uva', price: 3000, img: '/productos/uva.png'},
      {name: 'Zanahoria', price: 2150, img: '/productos/zanahoria.png'},   
    ],
    carro: []
  }
  
  ACTIONS = {
    RES: 'res',
    SUM: 'sum'
  }
  mapeo = (carro,producto,action) => {
    const newCarro = carro.map(e => {
      if(e.name === producto.name){
        if(action === this.ACTIONS.SUM){
          return{
          ...e,
            cantidad: e.cantidad+1
          }  
        }else if(action === this.ACTIONS.RES){
          return{
          ...e,
          cantidad: e.cantidad-1
          }
        }
      }
      return e
    })
    return newCarro
  }

  agregarAlCarro = (producto,cant) => {
    const { carro } = this.state
    if (carro.find( x => x.name === producto.name)){
      const newCarro = this.mapeo(carro, producto, this.ACTIONS.SUM)
      return this.setState({
        carro: newCarro
      })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto, 
        cantidad: cant
      })
    })
  }
  eliminarDelCarro = (producto) => {
    const {carro } = this.state 
    if(carro.find( x => x.name === producto.name)){
      const newCarro = carro.filter(p => p.name !== producto.name)
      return this.setState({
        carro: newCarro
      })
    }
  }
  incrementarCarro = (producto) => {
    const { carro } = this.state
    if(carro.find( x => x.name === producto.name)){
      const newCarro = this.mapeo(carro, producto, this.ACTIONS.SUM)
      return this.setState({
        carro: newCarro
      })
    }
  }
  decrementarCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(x => x.name === producto.name)){
      if(producto.cantidad > 1){

        const newCarro = this.mapeo(carro, producto, this.ACTIONS.RES)
        return this.setState({
          carro: newCarro
        })
      }
      return this.eliminarDelCarro(producto)
    }
  }
  vaciarCarro = () => {
    return this.setState({
      carro: []
    })
  }
  render() {
    
    return(
      <div>
        <Navbar 
        carro={this.state.carro} 
        eliminarDelCarro={ this.eliminarDelCarro }
        incrementarCarro={ this.incrementarCarro }
        decrementarCarro={ this.decrementarCarro }
        vaciarCarro={ this.vaciarCarro}
        />

        <Layout>
          <Title />
          <Productos
          agregarAlCarro={this.agregarAlCarro}
          productos={this.state.productos}
        />
        </Layout>
      </div>
    )
  }
}


export default App;
