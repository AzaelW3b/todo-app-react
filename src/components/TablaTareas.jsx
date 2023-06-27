import { formatearFecha } from '../helpers/formatearFecha'
const TablaTareas = ({ tareas }) => {
    return ( 
        <div className="fondo-blanco">
            <div className="encabezado-tareas">
                <button>Todas</button>
                <button>Completas</button>
                <button>Incompletas</button>
            </div>
            <table className="tabla-tareas">
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Completada</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tareas.map( tarea => (
                            <tr key={ tarea.id }>
                                <td>{ tarea.todo }</td>
                                <td>{ tarea.completada ? 'si' : 'no' }</td>
                                <td>{ formatearFecha(tarea.fecha) }</td>
                                <td>
                                    <button className="boton-accion">
                                        <span className="material-icons">edit</span>
                                    </button>

                                    <button className="boton-accion">
                                        <span className="material-icons">delete</span>
                                    </button>

                                    <button className="boton-accion">
                                        <span className="material-icons">check_circle</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
     )
}
 
export default TablaTareas