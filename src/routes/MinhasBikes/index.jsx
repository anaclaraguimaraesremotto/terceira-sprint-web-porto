import './minhas-bikes.css';
import BikeFake from '../../image/bicicleta-ilustrativa.jpg'
import { Link } from "react-router-dom"

export default function MinhasBikes() {
 
  return (
    <main>
      <section className="minhas-bikes">
        <button type="button" className="btn-adc">
          <Link to='/cadastro-bike'>Adicionar</Link>
        </button>
        <h2>Minhas Bikes</h2>
          <div className="box-bike" >
            <img src={BikeFake} alt="bike ilustrativa" />
            <div className="dados">
              <p>Número de série:</p>
              <p>Modelo:</p>
              <p>Categoria:</p>
              <button type="button" className="btn-apaga">
              <Link to="/cadastro-bike">Alterar</Link>
              </button>
            </div>
          </div>
      
      </section>
      
    </main>
  );
}