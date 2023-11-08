import { useState } from 'react'
import './styles/form.css'
import Jornal from './Jornal'

let nextId = 0

export default function Form(){
    const [titulo, setTitulo] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [noticias, setNoticia] = useState([])

    return(
        <div className='techphill'>
            <form>
                <div className="conteinerForm">
                <h2>Qual sua notícia</h2>
                        <input type="text" 
                                value={titulo}
                                onChange={e=>setTitulo(e.target.value)}
                                placeholder="título da notícia"
                                required/>
                        <textarea 
                            value={conteudo}
                            onChange={e=>setConteudo(e.target.value)}
                            rows={20} 
                            cols={50}
                        />
                        <button 
                        onClick={()=>{
                            
                            setNoticia(
                                
                            [   ...noticias,
                                {
                                    id: nextId++,
                                    titulo: titulo,
                                    conteudo: conteudo
                                }
                            ]
                            )
                            setTitulo('')
                            setConteudo('')
                        }}>Salvar</button>
                </div>
            </form>
            <div className='noticias'>
                {
                    noticias.map(noticia=>(
                        <Jornal key={noticia.id} titulo={noticia.titulo} conteudo={noticia.conteudo}/>
                    ))
                }
            </div>
        </div>
    )
}