import React from "react"
import "./Review.css"

const Review = () => {

    return (
<section class="testimonials">
        <div class="container">
            <div class="section-header">
                <h2>What Our Customers Say</h2>
            </div>

            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>"MoneyFlow made buying my first home possible. The process was smooth, rates were competitive, and the team was incredibly helpful throughout."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">SJ</div>
                        <div class="author-info">
                            <div class="author-name">Sarah Johnson</div>
                            <div class="author-title">Homeowner</div>
                        </div>
                    </div>
                </div>

                <div class="testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>"Got approved for my business loan in just 2 days! The rates were better than my bank and the service was outstanding."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">MR</div>
                        <div class="author-info">
                            <div class="author-name">Mike Rodriguez</div>
                            <div class="author-title">Business Owner</div>
                        </div>
                    </div>
                </div>

                <div class="testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>"Refinancing my student loans saved me thousands. The online process was simple and customer service was excellent."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">AL</div>
                        <div class="author-info">
                            <div class="author-name">Amanda Lee</div>
                            <div class="author-title">Graduate Student</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );};

    export default Review 