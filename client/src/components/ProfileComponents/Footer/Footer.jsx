import './Footer.css'

const Footer = () => {
    return ( 
        <>
        <footer id="footer">
    <div class="container">
      <h3>John Doe</h3>
      <p>If you have any questions or need assistance, feel free to reach out to me. I am here to help!</p>
      <div class="social-links">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      <div class="copyright">
        &copy; All Rights Reserved
      </div>
    </div>
  </footer>

        </>
     );
}
 
export default Footer;