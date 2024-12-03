import React from 'react';
import '../styles/Home.css';
import homeImage from '../assets/home-image.jpg';
import solutionImage from '../assets/solution-image.jpg';
import serviceImage from '../assets/service-image.jpg';
import serviceImage2 from '../assets/service2.jpg';
import serviceImage3 from '../assets/service3.jpg';
import 'animate.css';

const Home = () => {
    return (
        <section className="home">
            <div className="container text-center">
                {/* Hero Section */}
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 animate__animated animate__fadeInLeft">
                        <h1 className="display-4">Revolutionizing AI Solutions</h1>
                        <p className="lead">
                            Delivering cutting-edge computer vision and machine learning technologies for businesses worldwide.
                        </p>
                        <a href="/about" className="btn btn-primary btn-lg">Learn More</a>
                    </div>
                    <div className="col-md-5">
                        <img src={homeImage} alt="AI Technologies" className="img-fluid animate__animated animate__fadeInRight" />
                    </div>
                </div>

                {/* Features Section */}
                <section className="features mt-5 pt-5">
                    <h2 className="display-5 mb-4">Our Key Features</h2>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <h3>Real-Time Processing</h3>
                            <p>Experience the power of real-time data analysis with our advanced algorithms.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Seamless Integration</h3>
                            <p>Our solutions easily integrate into your existing systems, providing a seamless experience.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Custom AI Models</h3>
                            <p>We design AI models that suit your business needs for maximum performance.</p>
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="solutions mt-5 pt-5 bg-light">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5">
                            <img src={solutionImage} alt="Solutions" className="img-fluid animate__animated animate__fadeInLeft" />
                        </div>
                        <div className="col-md-6 animate__animated animate__fadeInRight">
                            <h2 className="display-5">Innovative Solutions for Every Industry</h2>
                            <p>Whether it’s healthcare, automotive, or finance, our solutions are designed to meet the challenges faced by modern industries.</p>
                            <ul className="list-unstyled">
                                <li><strong>Healthcare:</strong> AI-driven diagnostics and patient monitoring systems.</li>
                                <li><strong>Automotive:</strong> Autonomous driving and vehicle recognition systems.</li>
                                <li><strong>Finance:</strong> Fraud detection and automated decision-making tools.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Services Section
                <section className="services mt-5 pt-5">
                    <h2 className="display-5 mb-4">What We Offer</h2>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <img src={serviceImage} alt="Consultancy" className="img-fluid mb-3" />
                            <h4>Consultancy</h4>
                            <p>We offer expert advice to help you make informed AI technology decisions for your business.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={serviceImage2} alt="Custom AI Solutions" className="img-fluid mb-3" />
                            <h4>Custom AI Solutions</h4>
                            <p>Our team develops tailor-made AI solutions that fit your exact needs and objectives.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={serviceImage3} alt="Support & Maintenance" className="img-fluid mb-3" />
                            <h4>Support & Maintenance</h4>
                            <p>We offer 24/7 support and maintenance to ensure your AI systems run smoothly.</p>
                        </div>
                    </div>
                </section> */}

                {/* Services Section */}
                <section className="services mt-5 pt-5">
                    <h2 className="display-5 mb-4">What We Offer</h2>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <img src={serviceImage} alt="Consultancy" className="service-image mb-3" />
                            <h4>Consultancy</h4>
                            <p>We offer expert advice to help you make informed AI technology decisions for your business.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={serviceImage2} alt="Custom AI Solutions" className="service-image mb-3" />
                            <h4>Custom AI Solutions</h4>
                            <p>Our team develops tailor-made AI solutions that fit your exact needs and objectives.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={serviceImage3} alt="Support & Maintenance" className="service-image mb-3" />
                            <h4>Support & Maintenance</h4>
                            <p>We offer 24/7 support and maintenance to ensure your AI systems run smoothly.</p>
                        </div>
                    </div>
                </section>



                {/* Testimonials Section */}
                <section className="testimonials mt-5 pt-5 bg-light">
                    <h2 className="display-5 mb-4">What Our Clients Say</h2>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <blockquote className="blockquote">
                                <p className="mb-0">"VisionTech has transformed our business with their AI expertise. We have seen a 30% increase in efficiency."</p>
                                <footer className="blockquote-footer mt-2">John Doe, CEO of TechCorp</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-4">
                            <blockquote className="blockquote">
                                <p className="mb-0">"Their custom AI models fit perfectly with our operations. We couldn’t be happier!"</p>
                                <footer className="blockquote-footer mt-2">Jane Smith, Head of Operations at AutoDrive</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-4">
                            <blockquote className="blockquote">
                                <p className="mb-0">"The real-time processing power of VisionTech’s systems is truly remarkable."</p>
                                <footer className="blockquote-footer mt-2">Michael Lee, CTO of FinVision</footer>
                            </blockquote>
                        </div>
                    </div>
                </section>


                {/* Call to Action Section */}
                <section className="call-to-action mt-5 pt-5">
                    <div className="text-center">
                        <h2 className="display-5">Ready to Transform Your Business?</h2>
                        <p>Contact us today and let's discuss how we can take your business to the next level with AI and computer vision technologies.</p>
                        <a href="/contact" className="btn btn-success btn-lg">Get Started</a>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Home;
