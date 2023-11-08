import './styles/form.css'


export default function Form({title, conteudo}){
    return(
        <form>
            <div className="conteinerForm">
                    <input type="text" placeholder="título da notícia"required/>
                    <textarea rows={20} cols={50}/>
                    <button>Salvar</button>
            </div>
        </form>
    )
}