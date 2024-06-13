//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Enviar from './components/Enviar'
import Formulario from './components/Formulario'




function App() {
      

  return (
    <>
       <header>
             <h1>Conexión Total</h1>
      </header>
      <div>
        <p>En conexión total disponemos de la mejor conexion a internet al mejor precio<br></br>
           desde 100 megas hasta 1000 megas dependiendo de tus necesidades
           descuento del 10% en la primera factura que esperas!?,
           Si estas interesado en contratar nuestro servicio dejanos tu contancto y un colaborador se comunicara contigo</p>
    </div>
     
     <main> 
          <div>
            <Formulario/>
          </div>
          
          <div>
            <Enviar text="Enviar formulario"></Enviar>
          </div>
          
    </main> 
    </>
  )
}

export default App
