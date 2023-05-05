type setType = {
    ImagemTuristica: string;
    TituloTuristico: string;
}

export default function CardTuristico({ImagemTuristica, TituloTuristico}:setType) {
    return(
        <>
            <section id="card-turistico">
                <div style={{backgroundImage: `url(${ImagemTuristica})`}} className="bg-image">
                    <button>{TituloTuristico}</button>
                </div>
            </section>
        </>
    )
}