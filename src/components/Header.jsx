import { Link } from "react-router-dom"
import logo from '../image/logo-porto.png'

export default function Header(){

    return(
        <>
            <div className="container">
                <header className="header">
                    <img src={logo} alt="Logo Porto Seguro" />
                    <h1>+ CycleSecure</h1>
                </header>
                    <nav className="menu">
                    <Link to='/'>Home</Link>
                    <span> | </span>
                    <Link to='/contato'>Entre em Contato</Link>
                    <span> | </span>
                    <Link to='/equipe'>Nossa Equipe</Link>
                    
                    
                </nav>
            </div>
        </>
    )
}