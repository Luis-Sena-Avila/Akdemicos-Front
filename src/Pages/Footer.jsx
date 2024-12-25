import "../Styles/Footer.css"
const Footer = () => {
    return (
      <div className="containerFooter">
          <div className="contenidoFooter">
              <div className="contenAka"><span>Akdemicos</span><h6>© 2024 Akdemicos, Inc.</h6></div>
              <div className="contenRedes">
                <a href="" target="_blank"><box-icon type='logo' name='facebook'></box-icon></a>
                <a href="" target="_blank"><box-icon name='instagram' type='logo' ></box-icon></a>
                <a href="" target="_blank"><box-icon name='youtube' type='logo' ></box-icon></a>
              </div>
          </div>
      </div>
    );
};
export default Footer
