type setString = {
    imagem1: string; 
    imagem2: string; 
    imagem3: string; 
    imagem4: string; 
    imagem5: string; 
    imagem6: string;
    altImagem1: string;
    altImagem2: string;
    altImagem3: string;
    altImagem4: string;
    altImagem5: string;
    altImagem6: string;
}

export default function MuralExperiencias({imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, altImagem1, altImagem2, altImagem3, altImagem4, altImagem5, altImagem6}:setString) {
  return (
    <>
      <section id="mural-experiencias">
        <div className="container-titulo-subtitulo">
          <h3>use a hashtag #brasilisverigudi</h3>
          <h2>Nosso mural de Experiências</h2>
        </div>
        <div className="grid-images">
          <div className="grid-img-1">
            <img src={imagem1} alt={altImagem1} />
          </div>
          <div className="grid-img-2">
          <img src={imagem2} alt={altImagem2} />
          </div>
          <div className="grid-img-3">
          <img src={imagem3} alt={altImagem3} />
          </div>
          <div className="grid-img-4">
          <img src={imagem4} alt={altImagem4} />
          </div>
          <div className="grid-img-5">
          <img src={imagem5} alt={altImagem5} />
          </div>
          <div className="grid-img-6">
          <img src={imagem6} alt={altImagem6} />
          </div>
        </div>
      </section>
    </>
  );
}
