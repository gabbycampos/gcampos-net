import React from 'react';
import bgImageMe from '../photos/bgImageMe.jpg';

const Contact = () => {
    return (
        <div className="row">
            <div className="column">
                <img src={bgImageMe} alt="portrait" />
            </div>
            <div className="column">
                <div className="text">
                    <h3>Hi, I'm Gabriela Campos</h3>
                    <h5>2019 - Present</h5>
                    <p>I create responsive websites from scratch and experiment with a variety of
                    languages and frameworks in Chicago, IL.
                    </p>
                    <h5>2016 - Present</h5>
                    <p>I retouch photos to specifications of the client and render 3D images for advertising.</p>
                    <p>Thanks for visiting!</p>
                    <div className="contact-links">
                        <p><a href="mailto:gabbycampos31@gmail.com">gabbycampos31@gmail.com</a></p>
                        <p><a href="https://www.linkedin.com/in/gabriela-campos-b5195616a/">linkedin</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Contact;