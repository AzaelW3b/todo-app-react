import { useState } from 'react'
import EncabezadoFormulario from './EncabezadoFormulario'
import MensajeError from './MensajeError'
import InputTarea from './InputTarea'
import shortid from 'shortid'
import api from '../api/axios'

const FormularioTarea = ({ setTareas, tareas }) => {
    const [error, setError] = useState(false)
    const [tarea, setTarea] = useState({
        id: shortid.generate(),
        todo: '',
        completada: false,
        fecha: Date.now()
    })
    const { todo } = tarea

    const handleSubmit = async e => {
        e.preventDefault()

        if (todo.trim() === '') {
            setError(true)
            return
        } 
        try {
            const { data } = await api.post('/tareas', tarea)
            console.log(data)
            setTareas([...tareas, data])
            // limpiar estado
            setError(false)
            setTarea({
                id: '',
                todo: '',
                completada: false,
                fecha: Date.now()
            })

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
            />
            {
                error ? <MensajeError mensaje="Error, debes ingresar una tarea."/> : null
            }
        </form>
     )
}
 
export default FormularioTarea