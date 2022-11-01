import React from "react"
export default function Descripcion(props) {
    console.log(props)
    let {titulo} = props 
    let {descrip} = props 
    let {estiloContenedor} = props
    return (
        <div className={estiloContenedor}>
            <h3>{titulo}</h3>
            <p>{descrip}</p>
        </div>
    )
}