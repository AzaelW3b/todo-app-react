import { useState } from 'react'
import EncabezadoFormulario from './EncabezadoFormulario'
import InputTarea from './InputTarea'
import shortid from 'shortid'
const FormularioTarea = () => {

    const [tarea, setTarea] = useState({
        id: shortid.generate(),
        todo: '',
        completada: false,
    })
    
    return (
        <form className="formulario-tarea">
            <EncabezadoFormulario/>
            <InputTarea
                tarea={tarea}
                setTarea={setTarea}
            />
        </form>
     )
}
 
export default FormularioTarea