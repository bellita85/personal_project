const footer = () => {

    return (
        <footer className="footer">
        {/* <a title="Home" className="footer__flecha" //href=./index.html#enlace_header//> 
        > */}
        {/* // <img src="image.png" alt=""> */}
        {/* </a> */}
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
    );
  };
  
  export default footer;