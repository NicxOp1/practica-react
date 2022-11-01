import './data/events1';
import './App.css';
import Imagen from './componentes/Imagen'
import data from './data/events1';
import Flechas from './componentes/Flechas';
import { useState ,useEffect} from 'react'
import Descripcion from './componentes/Descripcion';
function App() {
  let [mostrarOcultar,setMostrarOcultar] = useState(false)
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
    console.log(mostrarOcultar)
  }
  let [numeroAcambiar,setNumeroAcambiar] = useState(0)
 
   let next = () => {
    if (numeroAcambiar<data.length-1) {
      setNumeroAcambiar(++numeroAcambiar)
    } else {
      setNumeroAcambiar(0)
    }
    console.log(numeroAcambiar)
  }
  let prev = () => {
    if (numeroAcambiar>0) {
      setNumeroAcambiar(--numeroAcambiar)
    } else {
      setNumeroAcambiar(data.length-1)
    }
    console.log(numeroAcambiar) 
    
  }  
    useEffect(() => {
      const interval = setInterval(() => {
        next()
      }, 5000);
      return () => clearInterval(interval);
    });
  return (
    <div className='contenedorCarrousel'>
      <h1>{data[numeroAcambiar].category}</h1>
      <Imagen image={data[numeroAcambiar].image} />
      {mostrarOcultar?(<>
      <p className='ocultar' onClick={hide}>ocultar info</p>
      <Descripcion titulo={data[numeroAcambiar].name} descrip={data[numeroAcambiar].description} estiloContenedor="contenedorDescrip"/></>):(
      <p className='mostrar' onClick={hide}>mostrar info</p>)
      }
      <div className='flecha'>
      <Flechas accion='anterior' estilo='flechaAnterior' evento={prev} />
      <Flechas accion='siguiente' estilo='flechaSiguiente' evento={next} />
      </div>
    </div>

  );
  
}

export default App;
