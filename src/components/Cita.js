import React from 'react';
import PropTypes from 'prop-types';

export default function Cita({cita, eliminarCita}) {
    return (
        <div className="media m-2 p-4 border border-secondary ">
            <div className="media-body col-md-10">
                <h4 className="my-0">{cita.mascota}</h4>
                <p className="my-0"><span>Propietario:</span> {cita.propietario}</p>
                <p className="my-0"><span>Fecha:</span> {cita.fecha}</p>
                <p className="my-0"><span>Hora:</span> {cita.hora}</p>
                <p className="my-0"><span>Sintomas:</span> {cita.sintomas}</p>
                
                <button 
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => eliminarCita(cita.id)}
                >
                    Borrar
                </button>
            </div>
        </div>
    )
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
};