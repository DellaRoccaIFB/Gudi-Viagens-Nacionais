import Gudi from "../../../Img/Gudi O bom da vida e viver.svg"

export default function SobreNos() {
    return(
        <section id="sobre-nos">
            <div className="column">
                <a href="/">
                <img src={Gudi} alt="logo Gudi" />
                </a>
                <p>Sobre nós</p>
                <p>Mural de memórias</p>
                <p>Eventos Gudi</p>
                <p>Nosso blog</p>
            </div>
            <div className="column">
                <h3>Contato</h3>
                <p>Chat Virtual</p>
                <p>SAC Online</p>
                <p>Ouvidoria</p>
                <p>FAQ</p>
            </div>
            <div className="column">
            <h3>Benefícios</h3>
                <p>Conta digital Gudi</p>
                <p>Viaje com Milhas</p>
                <p>C6 Átomos</p>
                <p>iD Jovem</p>

            </div>
            <div className="column">
            <h3>lugares</h3>
                <p>O melhor do Brasil</p>
                <p>Cidades frequentes</p>
                <p>Pontos turísticos</p>
                <p>Restaurantes</p>

            </div>
            <div className="column">
            <h3>Curiosidades</h3>
                <p>Cultura e tradições</p>
                <p>Pratos típicos</p>
                <p>Mitos brasileiros</p>
                <p>Carnaval</p>

            </div>
        </section>
    )
}