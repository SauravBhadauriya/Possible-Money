import React from "react"
import "./Footer.css"

const  Footer = () => {
    return(
     <footer id="contact" class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <div class="logo-icon">₹</div>
                        <span class="logo-text">Possible Money</span>
                    </div>
                    <p>Your trusted partner for all financial solutions. Making dreams affordable since 2008.</p>
                    <div class="social-links">
                        <a href="#" class="social-link">📞</a>
                        <a href="#" class="social-link">✉️</a>
                        <a href="#" class="social-link">📍</a>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Loan Products</h3>
                    <ul>
                        <li><a href="#">Home Loans</a></li>
                        <li><a href="#">Auto Loans</a></li>
                        <li><a href="#">Personal Loans</a></li>
                        <li><a href="#">Business Loans</a></li>
                        <li><a href="#">Student Loans</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-icon">📞</span>
                            <span>1-800-MONEY-01</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">✉️</span>
                            <span>loans@moneyflow.com</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📍</span>
                            <span>123 Financial Street New York, NY 10001</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 MoneyFlow. All rights reserved. Licensed Lender NMLS #123456</p>
            </div>
        </div>
    </footer>
    

    );
};

export default Footer