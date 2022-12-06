import { Link } from "react-router-dom";
import { StyledFooter } from "../styledComponents/styledComponents";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>Contact Us</p>
        <p>Faq</p>
        <p>Terms of Service</p>
        <p><Link to='/login'>Sign In/Register</Link></p>
      </div>
      <div className="copyright">
        <p>&copy; Cacti Cacti Cacti 2022</p>
    </div>
    </StyledFooter>
  );
};

export default Footer;
