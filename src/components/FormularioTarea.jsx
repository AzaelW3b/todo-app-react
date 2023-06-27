import { useState } from 'react'
import EncabezadoFormulario from './EncabezadoFormulario'
import InputTarea from './InputTarea'
import shortid from 'shortid'
import api from '../api/axios'

const FormularioTarea = ({ setTareas, tareas }) => {

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
            console.log('Debes ingresar una tarea')
            return
        } 
        try {
            const { data } = await api.post('/tareas', tarea)
            setTareas([...tareas, data])
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
        </form>
     )
}
 
export default FormularioTarea