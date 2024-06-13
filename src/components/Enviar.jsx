import React from "react";

function Enviar ({ text }){
   function Handleclick (){
    alert ("Enviado");
}
   return (
    <button onClick={Handleclick}>{text}</button>
);
}   
export default Enviar