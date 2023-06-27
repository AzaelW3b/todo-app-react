
const InputTarea = ({ tarea, setTarea }) => {
    console.log(tarea)
    return (  
        <div className="input-tarea">
            <input type="text" placeholder="Ingresa el nombre de la tarea ..."/>
            <input type="submit" value="+ Agregar tarea"/>
        </div>
    );
}
 
export default InputTarea