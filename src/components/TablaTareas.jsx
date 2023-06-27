import { formatearFecha } from '../helpers/formatearFecha'
const TablaTareas = ({ tareas, eliminarTareas, completarTarea, buscarTareaId, tareasCompletas, tareasIncompletas, todasTareas }) => {

  
    return ( 
        <div className="fondo-blanco">
        
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
                                <td>{ tarea.completada ? <p className="completada">Si</p> : <p className="no-completada">No</p> }</td>
                                <td>{ formatearFecha(tarea.fecha) }</td>
                                <td>
                                    <button
                                        onClick={ ()=> buscarTareaId(tarea.id) } 
                                        className="boton-accion">
                                        <span className="material-icons">edit</span>
                                    </button>

                                    <button
                                        onClick={ ()=> eliminarTareas(tarea.id) } 
                                        className="boton-accion">
                                        <span className="material-icons">delete</span>
                                    </button>

                                    <button
                                        onClick={ ()=> completarTarea(tarea) } 
                                        className="boton-accion">
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