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
              <p><b>Número de série:</b> MMB123456789</p>
              <p><b>Modelo: </b> Mountain Master Pro</p>
              <p><b>Categoria: </b>Mountain Bike</p>
              <button type="button" className="btn-apaga">
              <Link to="/cadastro-bike">Alterar</Link>
              </button>
            </div>
          </div>
      
      </section>
      
    </main>
  );
}