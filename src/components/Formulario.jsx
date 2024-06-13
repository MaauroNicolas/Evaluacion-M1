import React from "react";
import "./Formulario.css";
 function Formulario(){
    return (
        <div className="Container">
         <h2>DATOS DE CONTACTO</h2>
         
          <div>
            <label>
              Nombre:
               <input name="Nombre" type='text'></input>
            </label>
          </div>
          <div>
                <label>
                 Apellido:
                <input name="Apellido" type='text' required></input>
                </label>
          </div>
          <div>
                 <label>
                  Email:
                  <input name="Email" type='Email' required></input>
                 </label>
          </div>
                <label>
                 Telefono:
                 <input name="Telefono" type='number' required></input>
                </label>
          <div>
                <label>
                Password:
                <input name="Password" type='Password' required></input>
                </label>
          </div>
          <div>
                <label>
                Confirmar password:
                 <input name="confirmarP" type='Password' required></input>
                </label>
          </div>
          </div>
    )
 }

 export default Formulario