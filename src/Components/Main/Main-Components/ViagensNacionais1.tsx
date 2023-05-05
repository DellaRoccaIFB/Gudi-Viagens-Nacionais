import React from "react";

type toType = {
  Imagem: string;
  Alt: string;
  TituloCard: string;
  PrimaryColor: string;
  CardContent: React.ReactNode;
  OrderContent: number;
  secundaryColor: string;
};

export default function ViagensNacionais1({
  Imagem,
  Alt,
  TituloCard,
  PrimaryColor,
  CardContent,
  OrderContent,
  secundaryColor,
}: toType) {
  return (
    <>
      <section style={{color: `${secundaryColor}`}} id="viagens-nacionais">
        <div style={{order:`${OrderContent}`}} className="container-imagem">
          <img src={Imagem} alt={Alt} />
        </div>
        <div
          style={{ backgroundColor: `${PrimaryColor}` }}
          className="card-viagens-nacionais"
        >
          <div className="para-centralizar">
            <div className="container-linha-e-h3">
              <div style={{background: `${secundaryColor}`}} className="linha-branca"></div>
              <h3>Viagens Nacionais</h3>
            </div>
            <h2>{TituloCard}</h2>
            <p>{CardContent}</p>
            <button>AGENDAR</button>
          </div>
        </div>
      </section>
    </>
  );
}
