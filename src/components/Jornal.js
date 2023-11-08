import { useState } from "react"
import './styles/jornal.css'
export default function Jornal(props){
    const [isActive, setIsactive] = useState(false)
    return(
        <div className="noticia">
            <h3>{props.titulo}</h3>
            {
                isActive? 
                <div className="contNoticia">
                    <p>{props.conteudo}</p>
                    <button onClick={()=>{setIsactive(!isActive)}}>esconder</button>
                </div> : <button onClick={()=>{setIsactive(!isActive)}}>mostrar</button>
            }
          
        </div>
    )
}