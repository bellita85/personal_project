const main = () => {

    return (<main className="main">
    <section className="sec__insomnia">

      <h2 className="sec__insomnia__h2">Aqui podras elegir el evento</h2>
      <p className="sec__insomnia__text"> Hemos intentado crear varios apartados, para poder personalizarlos al evento
        clave. Dando mas importancia a eventos de gran envergadura para poder aplicarle mas caracteristicas pero sin
        dejar atras los eventos cotidianos que son los que mas se repiten

      </p>
    </section>
    <section className="sec__reasons">
      <h3 id="reasons" className="sec__reasons__tittle3"> Eventos</h3>
      <div className="reasons_article">
        <article className="article">
          <h4 className="tittle4">Bodas</h4>

        </article>
        <article className="article">
          <h4 className="tittle4">Comuniones</h4>
          {/* <img src="" alt=""> */}
        </article>
        <article className="article">
          <h4 className="tittle4">Bautizos</h4>
          {/* <img src="" alt=""> */}
        </article>
      </div>
      <div className="reasons_article">
        <article className="article">
          <h4 className="tittle4">Cumpleaños</h4>
          {/* <img src="" alt=""> */}
        </article>
        <article className="article">
          <h4 className="tittle4">aniversarios</h4>
          {/* <img src="" alt=""> */}
        </article>
        <article className="article">
          <h4 className="tittle4">laboral</h4>
          {/* <img src="" alt=""> */}
        </article>
      </div>
      <div className="reasons_article">
        <article className="article">
          <h4 className="tittle4">Ocio amigos</h4>
          {/* <img src="" alt=""> */}
        </article>
        <article className="article">
          <h4 className="tittle4">Ocio familia</h4>
          {/* <img src="" alt=""> */}
        </article>
        <article className="article">
          <h4 className="tittle4">Otros</h4>
          {/* <img src="" alt=""> */}
        </article>
      </div>

    </section>
  </main>
    );
  };
  
  export default main;