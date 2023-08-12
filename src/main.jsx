import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Encabezado from './components/Encabezado.jsx'
import Secciones_inicio from './components/Secciones_inicio.jsx'
import Contacto from './components/Contacto.jsx'
import Proyectos from './components/Proyectos.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' exact element={<>
        <Encabezado/>
        <Secciones_inicio/>
      </>}/>
      <Route path='/enviar-correo' element={<>
        <Encabezado/>
        <Contacto/>
      </>}/>
      <Route path='/proyectos' element={<>
        <Encabezado/>
        <Proyectos/>
      </>}/>
    </Routes>
    <Toaster />
  </Router>,
)
