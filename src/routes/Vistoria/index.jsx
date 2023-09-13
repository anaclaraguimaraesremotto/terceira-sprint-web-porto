import './vistoria.css'
import { Link } from 'react-router-dom'

export default function Vistoria(){

    return(
        <main >
            <section className='vistoria'>
                <h2>Vistoria</h2>
                    <div className="box">
                        <p>Clique aqui para tirar uma foto do chassi</p>
                        <button>Alterar</button>
                        <button className="btnEnviar">Enviar</button>
                    </div>
                    <div className="box"> 
                        <p>Clique aqui para tirar uma foto do guidão</p>
                        <button>Alterar</button>
                        <button className="btnEnviar">Enviar</button>
                        </div>
                    <div className="box">
                        <p>Clique aqui para tirar uma foto da roda dianteira</p>
                        <button>Alterar</button>
                        <button className="btnEnviar">Enviar</button>
                        </div>
                    <div className="box">
                        <p>Clique aqui para tirar uma foto do quadro</p>
                        <button>Alterar</button>
                        <button className="btnEnviar">Enviar</button>
                    </div>
                    <button type="button" className="btn-apaga">
                    <Link to="/minhas-bikes">Finalizar</Link>
                    </button>
            </section>
        </main>
    )
}