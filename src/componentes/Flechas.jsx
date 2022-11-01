import React from "react"

export default function Flechas(props) {
    console.log(props)
    let {accion} = props //saco la propidad verbo del objeto props
    let {estilo} = props
    let {evento} = props
    return (
        <div className={`${estilo}`} onClick={evento}> {accion} </div>
    )
}