// Fichero src/components/App.js
import '../styles/App.scss';

function App() {


  return (
    <div>
     <body className="body">
  <header id="enlace_header" className="header">
    <nav className="header__caja">
      <ul className="list_nav">
        <li>Quienes somos</li>
        <li>Eventos</li>
        <li>contacto</li>
      </ul>

    </nav>
    <p className="header__text">create social evets with.</p>
    <h1 className="header__h1">efficient event</h1>
    <div className="header__link"><a title="Reasons" className="header__link__a" //href='' 
    >
     {/* <img
          src="./assets/images/ico-scroll-down.svg " alt="menu icono"> */}
      </a></div>

  </header>
  <main className="main">
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
  <footer className="footer">
    <a title="Home" className="footer__flecha" //href=./index.html#enlace_header//> 
    >
    {/* // <img src="image.png" alt=""> */}
    </a>
    <section className="footer__section">


      <nav className="footer__nav2">
        <ul className="footer__nav1__ul2">
          <li className="footer__nav2__ul2__li"><a className="link" href="https://adalab.es/" target="_blank"
              title=" Twitter">Twitter</a></li>
          <li className="footer__nav2__ul2__li"><a className="link" href=" https://adalab.es/" target="_blank"
              title=" Instagram">Instagram</a></li>
        </ul>
      </nav>
      <ul className="footer__ul3">
        <li className="footer__ul3__li">Bella Garcia &copy2022</li>

      </ul>


    </section>

  </footer>

</body>
    </div>
  );
}

export default App;
