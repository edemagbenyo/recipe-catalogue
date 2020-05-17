import React from "react";
import "../styles/footer.scss";

const Footer = () => (
  <footer>
    <div className="info">
      <div>
        <h4>Useful links</h4>
        <ul>
          <li>
            <a href="/">About us</a>
          </li>
          <li ><a href="/">Contact us</a></li>
        </ul>
      </div>
      <p>
        {" "}
        Delicias helps you find the best recipes for your favourite dish. Dishes
        are categorize according to your taste.{" "}
      </p>
    </div>

    <p>Delicias &copy; 2020</p>
  </footer>
);
export default Footer;
