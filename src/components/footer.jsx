import icons from "./icons.JPG"
function Footer() {
    return(
    <>
     

      <footer className="footer-distributed">

        <div className="footer-right">

          {/* <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-github"></i></a> */}

          <img src={icons} alt="" width="200"/>

        </div>

        <div className="footer-left">

          <p className="footer-links">
            <a className="link-1" href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p>Lorem Ipsum &copy; 2021</p>
        </div>

      </footer>
    </>
    )
}


export default Footer;