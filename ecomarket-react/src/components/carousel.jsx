import react from 'react';

function CarouselPrincipal() {

    return (

        <div className="row">
            <div className="col-xl-12">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/assets/imgs/ecofriendly-hygiene-and-personal-care-items.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/imgs/higiene-personal-imagen-pinterest2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/imgs/alergiasyproductosecologicos5.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Antes</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Después</span>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default CarouselPrincipal;