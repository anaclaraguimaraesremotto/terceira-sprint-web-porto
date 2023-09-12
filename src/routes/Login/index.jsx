import './login.css'
import { Link } from "react-router-dom"

export default function Login(){

    return(
        <main>
            <section className="login">
                <h2>Acessar conta</h2>
            <section className="form">
                <form action="/logar" name="login" method="post">
                        <div>
                            <label for="documento" className='identacao'>CPF/CNPJ:</label>
                            <input type="number"  name="documento" required/>
                        </div>
                        <div>
                            <label for="senha" className='identacao'>Senha:</label>
                            <input type="password" name="senha" required/>
                        </div>
                        <button type="submit"> <Link to={'/minhas-bikes'}>Entrar</Link></button>
                    </form>
            </section>
            </section>
    </main>
    )
}