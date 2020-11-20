import React , {Component} from 'react';
import './App.css';
import './bootstrap.min.css';
import Header from './components/Header';
import ListaCitas from './components/ListaCitas';
import NuevaCita from './components/NuevaCita';



class App extends Component {
  state = {
    citas: []
  }

  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    
    this.setState({
      citas: [...this.state.citas, datos]
    })
  }

  eliminarCita = id => {
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter( cita => cita.id !== id); 
    this.setState({citas});
  }
  
  render() {
    return (
      <div className="container">
        <Header
          titulo='🐶 Veterinaria'        
        />
        <div className="row">
          <div className="col">
            <NuevaCita 
              crearNuevaCita = {this.crearNuevaCita}
            />
          </div>          
        </div>
        <div className="row">
          <div className="col mx-auto my-4">
            <ListaCitas 
              citas={this.state.citas}
              eliminarCita = {this.eliminarCita}
            />
          </div>
        </div>
        
      </div>
    );    
  }
}



export default App;
