import { Link } from 'react-router-dom'
import './contato.css'
Link

export default function Contato(){

    return(
        <main >
            <section className="contato">
                <h2>Entre em Contato</h2>
                <section className="form">
                    <form action="/contato/sucesso">
                    <div>
                        <label for="l-contato" className='identacao'>E-mail de contato:</label>
                        <input type="text" name="contato" required autofocus/>
                    </div>
                    <div>
                        <label for="l-assunto" className='identacao'>Assunto:</label>
                        <input type="text" name="assunto" required />
                    </div>
                    <div>
                        <label for="l-comentario" className='identacao'>Deixe seu comentário:</label>
                        <textarea name="comentario" cols="30" rows="10" required></textarea>
                    </div>
                    <button><Link to="/minhas-bikes">Enviar</Link></button>
                    </form>
                </section>
            </section>
        </main>
    )
}