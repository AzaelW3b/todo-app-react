import { useEffect, useState } from 'react'
import FormularioTarea from './components/FormularioTarea'
import TablaTareas from './components/TablaTareas'
import api from './api/axios'
import shortid from 'shortid'


const App = () => {

const [tareas, setTareas] = useState([])
const [tarea, setTarea] = useState({
  id: shortid.generate(),
  todo: '',
  completada: false,
  fecha: Date.now()
})
const [esNuevoRegistro, setEsNuevoRegistro] = useState(true)

  useEffect(()=> {
    const obtenerTareas = async () => {
      try {
        const { data } = await api.get('/tareas')
        setTareas(data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerTareas()
  },[])

  const eliminarTareas = async (id) => {
    try {
      // en la base de datos
      await api.delete(`/tareas/${ id }`)
      // en el estado
      setTareas(
        tareas.filter(tarea => tarea.id !== id)
      )

    } catch (error) {
      console.log(error)
    }
  }
  const completarTarea = async (tarea) => {
    try {
      const tareaTerminada = { ...tarea }
      tareaTerminada.completada = !tareaTerminada.completada
      await api.put(`/tareas/${tarea.id}`, tareaTerminada)
      const indiceTarea = tareas.map(tareaIndex => tareaIndex.id).indexOf(tarea.id)
      setTareas([
        ...tareas.slice(0, indiceTarea),
        tareaTerminada,
        ...tareas.slice(indiceTarea + 1)
      ])
     
    } catch (error) {
      console.log(error)
    }
  }
  const buscarTareaId = (id) => {
    try {
      const tareaOriginal = tareas.find(tareaIndex => tareaIndex.id === id)
      setTarea(tareaOriginal)
      setEsNuevoRegistro(false)
    } catch (error) {
      console.log(error)
    }
  }
  const editarTarea = async (tarea) => {
    try {
      const tareaOriginal = tareas.find(tareaIndex => tareaIndex.id === tarea.id)
      Object.assign(tareaOriginal, tarea)
      await api.put(`/tareas/${tarea.id}`, tarea)
      setEsNuevoRegistro(true)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="contenedor contenedor-formulario">
      <FormularioTarea
        setTareas={setTareas}
        tareas={tareas}
        setTarea={setTarea}
        tarea={tarea}
        esNuevoRegistro={esNuevoRegistro}
        setEsNuevoRegistro={setEsNuevoRegistro}
        editarTarea={editarTarea}
      />
      {
        tareas.length === 0 ? 
          <div className="mensaje-tareas">No hay tareas.</div> : 
          
          <TablaTareas
            tareas={tareas}
            eliminarTareas={eliminarTareas}
            completarTarea={completarTarea}
            buscarTareaId={buscarTareaId}
          />
      }
    </div>
  )
}

export default App

