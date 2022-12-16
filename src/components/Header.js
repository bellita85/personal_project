

const header = () => {

    return (<header id="enlace_header" className="header">
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
    );
  };
  
  export default header;