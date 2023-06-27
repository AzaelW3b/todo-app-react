const EncabezadoFormulario = ({ tareasPendientes }) => {

    const fechaHoy = new Date()
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

    return (  
        <div className="contenedor-encabezado">
            <div className="fecha-encabezado">
                <p>{`${ diasSemana[fechaHoy.getDay()] }, ${ fechaHoy.getDate() }`}
                     <span> de {`${ meses[fechaHoy.getMonth()] } del ${ fechaHoy.getFullYear() }`}.</span>
                </p>
            </div>
            <div className="cantidad-pendientes-encabezado">
                <p><strong>{ tareasPendientes }</strong> tareas pendientes</p>
            </div>
        </div>
    );
}
 
export default EncabezadoFormulario