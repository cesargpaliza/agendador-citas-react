import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

export default function ListaCitas({citas, eliminarCita}) {

    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Listado de citas';

    return (
        <div className="card">
            <div className="card-body">
            <h2 className="card-title text-center">{mensaje}</h2>
            </div>
            <div>
                {
                    citas.map(cita => (
                        <Cita 
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
                        />
                    ))
                }

            </div>
        </div>
    )
} 

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired,
};
