import ana from '../../image/ana.jpg'
import antonio from '../../image/antonio.jpg'
import giovanni from '../../image/giovanni.jpg'
import leonardo from '../../image/leonardo.png'
import gabriel from '../../image/gabriel.jpg'
import './nossa-equipe.css'

export default function NossaEquipe(){

    return(
        <main className='nossa-equipe'>
            <h2>Nossa Equipe</h2>
            <div className="equipe">
                    <div className='box1'>
                        <div id='ana'>
                            <img src={ana} alt="Ana Clara" />
                            <p>Ana Clara Remotto</p>
                        </div>
                        <div id='antonio'>
                            <img src={antonio} alt="Antônio" />
                            <p>Antônio Felipe</p>
                        </div>
                        <div id='giovanni'>
                            <img src={giovanni} alt="Giovanni" />
                            <p>Giovanni Paschoalatto</p>
                        </div>
                    </div>
                    <div className='box2'>
                        <div id='leonardo'>
                            <img src={leonardo} alt="Leonardo" />
                            <p>Leonardo Araki</p>
                        </div>
                        <div id='gabriel'>
                            <img src={gabriel} alt="Gabriel" />
                            <p>Gabriel Lopes</p>
                        </div>
                    </div>
                </div>
        </main>
    )
}