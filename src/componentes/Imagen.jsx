import React from 'react'

export default function Carrousel(props) {
    console.log(props)
    let {image}= props
   // let {titulo,datos} = props //saco las propiedades titulo y datos del objeto props
    //let {titulo} = props //saco las propiedades titulo del objeto props
    //let {datos} = props //saco las propiedades datos del objeto props
    return (
        <img src={image} alt="imagenFoto" />
    )
}