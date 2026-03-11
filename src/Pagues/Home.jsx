import { Header } from "../Components/Header"
import "../styles/css.css"
export const Home = () => {
    return (
 
        <>
            <div  style={{ backgroundImage: 'url("")' }}>

                <div className="container mt-5">
                   <p style={{ fontFamily: "'com'" }}>
                    Un clásico irresistible de la repostería
</p>
                    <br />
                    <h1>RED VELVET</h1>
                       <br />
                    <div className="d-flex gap-3">
                        <span>Selección del Chef</span>
                        <span>100% Orgánico</span>
                        <span className="border p-1 rounded">4.9 ★</span>
                    </div>
                    <br />

                    <div className="d-flex  align-items-center">
                        <img src="./credit-card.svg" alt="" />
                        <h3>La receta de pastel #1 de hoy </h3>
                    </div>

                    <br />

                    <div className="d-flex ">
                        <p>Un pastel elegante y suave, famoso por su intenso color rojo <br />y su textura aterciopelada. El delicado toque de cacao combinado <br /> con una cremosa cobertura lo convierte en una receta perfecta <br /> para momentos especiales o para sorprender con un postre inolvidable.</p>
                    </div>
                      <br />
                    <div className="d-flex gap-5">
                       <button type="button" className="btn btn-info" style={{
                        backgroundColor: "#800020",
                         color: "white",
                        border: "none",
                        fontFamily:"math"}}>
                       <img src="public/player-play (1).svg" alt="icono" style={{width: "20px", marginRight: "8px"}} />
                          Ver Receta
                         </button>
                         
                       <button type="button" className="btn btn-info" style={{
                        backgroundColor: "#e0c5c5",
                         color: "#800020",
                        border: "#800020",
                        fontFamily:"math"}}>
                            <img src="public/sparkles-2.svg" alt="icono" style={{width: "20px", marginRight: "8px"}} />
                        Secretos de la Receta
                         </button>
                    </div>

                    <div className="container text-center">
                        <div className="row mt-5">
                            <div className="col-3">
                                <img className="border rounded" src="./peliculas.jpg" alt="" />
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./peliculas.jpg" alt="" />
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./peliculas.jpg" alt="" />
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./peliculas.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

