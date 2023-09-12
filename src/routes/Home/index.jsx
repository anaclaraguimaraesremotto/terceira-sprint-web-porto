import './home.css'
import { Link } from "react-router-dom"

export default function Home(){

    return(

        <main>

            <div className="home">

                <h2>Olá, Bem-vindo e obrigado por escolher a Porto seguro!!!</h2>
        
                <p>Prezamos totalmente pela sua experiência e satisfação, e pensando nisso criamos nosso sistema de vistoria totalmente on-line, para que você, do conforto
                da sua casa possa contratar o seguro da sua bike da forma mais prática, rápida e segura 
                possível, tudo pronto para começarmos?</p>
                <div className='botao-inicio'>
                <button type="submit">
                    <Link to="/login">Iniciar</Link></button>
                </div>
            </div>
    
        </main>
    )
}