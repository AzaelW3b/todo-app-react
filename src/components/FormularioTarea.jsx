import { useState } from 'react'
import EncabezadoFormulario from './EncabezadoFormulario'
import MensajeError from './MensajeError'
import InputTarea from './InputTarea'
import api from '../api/axios'

const FormularioTarea = ({ setTareas, tareas, setTarea, tarea, esNuevoRegistro, setEsNuevoRegistro, editarTarea }) => {
    const [error, setError] = useState(false)
  
    const { todo } = tarea
    // guardar tarea
    const handleSubmit = async e => {
        e.preventDefault()

        if (todo.trim() === '') {
            setError(true)
            return
        } 
        try {
           if(esNuevoRegistro) {
                const { data } = await api.post('/tareas', tarea)
                setTareas([...tareas, data])
                // limpiar estado
                setError(false)
                setTarea({
                    id: '',
                    todo: '',
                    completada: false,
                    fecha: Date.now()
                })
           }else {
                editarTarea(tarea)
                setTarea({
                    id: '',
                    todo: '',
                    completada: false,
                    fecha: Date.now()
                })
           }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="formulario-tarea">
            <EncabezadoFormulario/>
            <InputTarea
                tarea={tarea}
                setTarea={setTarea}
                esNuevoRegistro={esNuevoRegistro}
            />
            {
                error ? <MensajeError mensaje="Error, debes ingresar una tarea."/> : null
            }
        </form>
     )
}
 
export default FormularioTarea