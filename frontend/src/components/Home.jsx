import img from "../assets/react.svg"

function Home(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>MiniProjects</h1>
                    <p>Esta pagina muestra pequeños mini proyectos de practica personales... Sus funciones principales es el uso y practica del lenguaje
                        de programacion Java, sus librerias y otras implementaciones como estructura de datos y patrones de diseño.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="card text-bg-dark">
                        <img src={img} className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Musicplayer</h5>
                            <p className="card-text">Reproductor de musica.</p>
                            <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card text-bg-dark">
                        <img src={img} className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home