import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import './Footer.css';
import nmls from '../../Assets/images/NMLS.png';
import echo from '../../Assets/images/eho.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="footer-logo">
            <span className="text-red-600">CAREERS </span> <span className="text-white">AT SUCCEDO</span>
          </h1>
          <p>Proudly Serving all of Texas and Colorado</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="/Privacy" className="footer-link">Privacy Policy</a>
            <a href="https://www.nmlsconsumeraccess.org/" className="footer-link">NMLS Consumer Access</a>
          </div>
          <div className="footer-icons">
            <AiFillInstagram className="footer-icon" />
            <BsFacebook className="footer-icon" />
            <AiOutlineTwitter className="footer-icon" />
          </div>
        </div>
      </div>
      <div className="footer-images">
        <img src={nmls} alt="NMLS" className="footer-image" />
        <img src={echo} alt="EHO" className="footer-image" />
      </div>
      <div className="footer-bottom">
        <p>
          CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A COMPANY OR A RESIDENTIAL MORTGAGE LOAN ORIGINATOR SHOULD COMPLETE AND SEND A COMPLAINT FORM TO THE TEXAS DEPARTMENT OF SAVINGS AND MORTGAGE LENDING, 2601 NORTH LAMAR, SUITE 201, AUSTIN, TEXAS 78705. COMPLAINT FORMS AND INSTRUCTIONS MAY BE OBTAINED FROM THE DEPARTMENT’S WEBSITE AT WWW.SML.TEXAS.GOV. THE DEPARTMENT MAINTAINS A RECOVERY FUND TO MAKE PAYMENTS OF CERTAIN ACTUAL OUT OF POCKET DAMAGES SUSTAINED BY BORROWERS CAUSED BY ACTS OF LICENSED RESIDENTIAL MORTGAGE LOAN ORIGINATORS. A WRITTEN APPLICATION FOR REIMBURSEMENT FROM THE RECOVERY FUND MUST BE FILED WITH AND INVESTIGATED BY THE DEPARTMENT PRIOR TO THE PAYMENT OF A CLAIM. FOR MORE INFORMATION ABOUT THE RECOVERY FUND, PLEASE CONSULT THE DEPARTMENT’S WEBSITE AT WWW.SML.TEXAS.GOV.
        </p>
        <p>
          &copy; 2024 Succedo Mortgage, LLC NMLS: 2584954 Licensed In: Texas and Colorado
        </p>
      </div>
    </footer>
  );
}

export default Footer;
