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
          />
      }
    </div>
  )
}

export default App

