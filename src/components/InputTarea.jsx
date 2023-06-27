
const InputTarea = ({ tarea, setTarea }) => {

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
                value="+ Agregar tarea"
            />
        </div>
    );
}
 
export default InputTarea