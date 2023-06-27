import { useEffect, useState } from 'react'
import FormularioTarea from './components/FormularioTarea'
import TablaTareas from './components/TablaTareas'
import api from './api/axios'

const App = () => {

const [tareas, setTareas] = useState([])

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
  };
  return (
    <div className="contenedor contenedor-formulario">
      <FormularioTarea
        setTareas={setTareas}
        tareas={tareas}
      />
      {
        tareas.length === 0 ? 
          <div className="mensaje-tareas">No hay tareas.</div> : 
          
          <TablaTareas
            tareas={tareas}
            eliminarTareas={eliminarTareas}
            completarTarea={completarTarea}
          />
      }
    </div>
  )
}

export default App

