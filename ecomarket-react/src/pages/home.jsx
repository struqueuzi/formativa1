import CarouselPrincipal from "../components/carousel";
import CardProducto from "../components/card";

function Home() {
    return (
        <main>
           
            <CarouselPrincipal />

            <div className="container">
              
                <div className="row">

                    <div className="col-xl-4">
                        <CardProducto 
                            titulo="Reducir el desperdicio de envases:" 
                            desc="Al comprar productos de higiene personal naturales, a menudo puedes optar por opciones con envases biodegradables o reutilizables, lo que disminuye la cantidad de plástico que termina en los vertederos." 
                        />
                    </div>

                    <div className="col-xl-4">
                        <CardProducto 
                            titulo="Evitar químicos agresivos:" 
                            desc="Muchos productos convencionales contienen ingredientes químicos sintéticos que pueden ser irritantes para la piel o tener efectos a largo plazo en la salud." 
                        />
                    </div>

                    <div className="col-xl-4">
                        <CardProducto 
                            titulo="Reducir el riesgo de enfermedades crónicas:"  
                            desc="Una dieta rica en alimentos naturales se asocia con un menor riesgo de padecer enfermedades crónicas, como diabetes y enfermedades cardíacas." 
                        />
                    </div>

                </div>
             
            </div>

        </main>
    );
}

export default Home;