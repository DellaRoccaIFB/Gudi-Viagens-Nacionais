import Imagem1 from "../../Img/BaloesEDuasPessoas2.png"
import Imagem2 from "../../Img/QuatroPessoasEmPe2.png"
import Imagem3 from "../../Img/CirculoDePessoasNaAgua2.png"
import Viagens from "./Main-Components/ViagensNacionais1"
import CardTuristico from "./Main-Components/CardsPontosTuristicos"
import RioDeJaneiro from "../../Img/CristoRedentor2.png"
import RioDasOstras from "../../Img/DuasMulheresPraia2.png"
import CaldasNovas from "../../Img/HomemPendurado2.png"
import Amazonia from "../../Img/MulherNoBarco2.png"
import MuralExperiencias from "./Main-Components/MuralExperiencias"
import PaiEBebe from "../../Img/HomemErguendoBebe2.png"
import PessoasPulando from "../../Img/SetePessoasPulando2.png"
import SelfieHomemECachorro from "../../Img/HomemECachorroSelfie2.png"
import SelfieHomem from "../../Img/HomemOculosBoneSelfie2.png"
import SelfieMulherBike from "../../Img/MulherEBicicleta2.png"
import QuatroPessoasSelfie from "../../Img/QuatroPessoasSelfie2.png"
import CardsDesenhos from "./Main-Components/CardsDesenhos";
import BonecoComMala from "../../Img/Logo Pessoa com mala.svg"
import EstradaMontanhaAviao from "../../Img/Grupo 305.svg"
import Coco from "../../Img/LogoAzulCoco.svg"
import Cardapio from "../../Img/Grupo 463.svg"


const colorBlue = "#005BD5"
const colorWhite = "#FFFFFF"
const colorLightGrey = "#EEEEEE"
const flexivelStyle = {display: "flex"}
const cardDesenhosStyle = {display: "flex", justifyContent: "space-between", padding: "0 14.16vw 5vw 14.16vw"}

export default function Main() {
    return(
        <>  
            {/* 'OrderContent' coloca ou a imagem na esquerda e o conteudo na direita ou imagem na direita e o conteudo na esquerda */}
            <Viagens Imagem={Imagem1} Alt={"Balões de ar quente e duas pessoas sentadas"} TituloCard={"O clima perfeito, no lugar perfeito"} CardContent={<>"Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço."</>} PrimaryColor={colorBlue} secundaryColor={colorWhite} OrderContent={0}/>
            <Viagens Imagem={Imagem2} Alt={"Quatro pessoas dançando em grupo ao ar livre"} TituloCard={"Curta uma nova vibe entre amigos"} CardContent={<>"Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos <strong>Planos Multi</strong>."</>} PrimaryColor={colorWhite} secundaryColor={colorBlue} OrderContent={1}/>
            <Viagens Imagem={Imagem3} Alt={"Circulo de pessoas dando as mãos na água"} TituloCard={"Algumas experiências são inexplicáveis"} CardContent={<>"Conheça as fontes termais de <strong>Caldas Novas, Goiás</strong>. Águas quentes, num clima sereno, relaxante e natural."</>} PrimaryColor={colorBlue} secundaryColor={colorWhite} OrderContent={0}/>
            <section style={flexivelStyle}>
                <CardTuristico ImagemTuristica={RioDeJaneiro} TituloTuristico="Rio de Janeiro"/>
                <CardTuristico ImagemTuristica={RioDasOstras} TituloTuristico="Rio das Ostras"/>
                <CardTuristico ImagemTuristica={CaldasNovas} TituloTuristico="Caldas Novas"/>
                <CardTuristico ImagemTuristica={Amazonia} TituloTuristico="Amazônia"/>
            </section>
            <MuralExperiencias imagem1={PaiEBebe} imagem2={PessoasPulando} imagem3={SelfieHomemECachorro} imagem4={SelfieHomem} imagem5={SelfieMulherBike} imagem6={QuatroPessoasSelfie} altImagem1="Homem erguendo bebê para cima" altImagem2="Sete crianças pulando de alegria" altImagem3="Homem tirando selfie com cachorro" altImagem4="Homem de boné e óculos" altImagem5="Mulher ciclista tirando selfie" altImagem6="Foto de quatro pessoas sorrindo e olhando para câmera"/>
            <section style={cardDesenhosStyle}>
                <CardsDesenhos Image={BonecoComMala} TituloCard={"O melhor do Brasil"} primaryColor={colorLightGrey} secundaryColor={colorBlue}/>
                <CardsDesenhos Image={EstradaMontanhaAviao} TituloCard={"Cidades mais frequentadas"} primaryColor={colorBlue} secundaryColor={colorLightGrey}/>
                <CardsDesenhos Image={Coco} TituloCard={"Pontos turísticos"} primaryColor={colorLightGrey} secundaryColor={colorBlue}/>
                <CardsDesenhos Image={Cardapio} TituloCard={"Restaurantes"} primaryColor={colorBlue} secundaryColor={colorLightGrey}/>
            </section>
        </>
    )
}