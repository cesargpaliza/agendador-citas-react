import React, { Component } from 'react';
import {v4 as uuidv4}from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    },
    error: false
}


class NuevaCita extends Component {

    state = { ...stateInicial  }

    handleChange = e => {
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;

        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            });
            return;
        } 

        const nuevaCita = {
            ...this.state.cita,
            id: uuidv4()
        }

        this.props.crearNuevaCita(nuevaCita);
        this.setState({ ...stateInicial });
    
    }

    render(){

        const {error} = this.state;



        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center pt-2">
                        Nueva Cita
                    </h2>

                    { error ? 
                            <div className="alert alert-danger text-center">
                                <strong>ERROR: </strong> todos los campos del formulario deben estar llenos.
                            </div>
                    
                    : null}

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row d-flex align-items-center ">
                            <div className="col-md-4 text-sm-left text-md-right">
                                <label htmlFor="mascota" className="">Nombre Mascota</label>
                            </div>
                            <div className="col-md-8">
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="form-group row d-flex align-items-center">
                            <div className="col-md-4 text-sm-left text-md-right">
                                <label htmlFor="propietario" className="">Propietario</label>
                            </div>
                            <div className="col-md-8">
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>

                        <div className="form-group row d-flex align-items-center">
                            <div className="col-md-4 text-sm-left text-md-right">
                                <label htmlFor="fecha" className="">Fecha</label>
                            </div>
                            <div className="col-md-8">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                        </div>

                        <div className="form-group row d-flex align-items-center">
                            <div className="col-md-4 text-sm-left text-md-right">
                                <label htmlFor="hora" className="">Hora</label>
                            </div>
                            <div className="col-md-8">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className="form-group row d-flex align-items-center">
                            <div className="col-md-4 text-sm-left text-md-right">
                                <label htmlFor="sintomas" className="">Síntomas</label>
                            </div>
                            <div className="col-md-8">
                                <textarea 
                                    type="text"
                                    className="form-control"
                                    name="sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div>

                        <div className="text-center">
                            <input type="submit" className="btn btn-success"/>
                        </div>
                        

                    </form>
                </div>
                
            </div>
        );
    }
}

NuevaCita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired,
}

export default NuevaCita;