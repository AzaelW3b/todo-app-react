
const InputTarea = ({ tarea, setTarea, esNuevoRegistro }) => {

    return (  
        <div className="input-tarea">
            <input
                name="todo"
                type="text" 
                placeholder="Ingresa el nombre de la tarea ..."
                onChange={ e => setTarea({...tarea, [e.target.name]: e.target.value })}
                value={tarea.todo}
            />
            <input 
                type="submit" 
                value={esNuevoRegistro ? 'Agregar tarea' : 'Editar Tarea'}
            />
        </div>
    );
}
 
export default InputTarea