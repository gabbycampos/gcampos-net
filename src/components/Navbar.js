import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Timeline from './Timeline';
import Contact from './Contact';
import Blog from './Blog';

const Navbar = () => {
    return (
        <Router>
            <div className="navbar">
                <ul>
                    <Link className="nav-link" to="/"> <span>/</span>projects</Link>
                    <Link className="nav-link" to="/contact"><span>/</span>contact</Link>
                    <Link className="nav-link" to="/blog"><span>/</span>blog</Link>
                </ul>
            </div>
            <Route exact path="/" component={Timeline} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
        </Router>
    )
}

export default Navbar;