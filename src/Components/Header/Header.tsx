import React from "react";
import Gudi from "../../Img/Gudi O bom da vida e viver.svg";
import Kombi from "../../Img/KombiPraia2.png";
import "../../Styles.css";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <a href="/">
            <img src={Gudi} alt="" />
          </a>
        </div>
        <ul>
          <li>Sobre</li>
          <li>Benefícios</li>
          <li>Contato</li>
          <li>Agendar</li>
        </ul>
      </nav>
      <section className="banner" style={{ backgroundImage: `url(${Kombi})` }}>
        <div className="container-title-search-button">
          <h1>Para qual estado você deseja ir?</h1>
          <input type="text" placeholder="Pesquisar"/>
          <button>BUSCAR</button>
        </div>
      </section>
    </header>
  );
}
