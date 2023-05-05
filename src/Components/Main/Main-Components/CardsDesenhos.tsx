type setType = {
    Image: string;
    TituloCard: string;
    primaryColor: string;
    secundaryColor: string;
}

export default function CardsDesenhos({Image,TituloCard, primaryColor, secundaryColor}:setType) {
    return(
        <>
            <section id="section-cards-desenhos">
                <div style={{backgroundColor:`${primaryColor}`}} className="card-desenho">
                    <img src={Image} alt="" />
                    <h2 style={{color: `${secundaryColor}`}}>{TituloCard}</h2>
                </div>
            </section>
        </>
    )
}