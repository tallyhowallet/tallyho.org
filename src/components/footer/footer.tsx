import PropTypes from "prop-types";
import React from "react";
import "./footer.scss";

const Footer = ({}: any) => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-section__logo">
          <p></p>
        </div>
        <div className="footer-section__heading">TALLY HO!</div>
        <div className="footer-section__links">
          <div className="footer-section__link footer-section__link_discord">
            <div className="footer-section__discord discord-icon"></div>
            <div>Discord</div>
          </div>
          <div className="footer-section__link footer-section__link_twitter">
            <div className="footer-section__twitter twitter-icon"></div>
            <div>Twitter</div>
          </div>
          <div className="footer-section__link footer-section__link_github">
            <div className="footer-section__github github-icon"></div>
            <div>Github</div>
          </div>
        </div>
        <div className="footer-section__sign">© 2021 | A <a href="https://thesis.co">Thesis*</a> Build</div>
      </div>
    </>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
