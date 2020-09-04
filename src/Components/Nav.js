import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">ReactRouterApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to='/'>
                            <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        </Link>
                        <Link to='/about'>
                            <a className="nav-item nav-link" href="#">About</a>
                        </Link>
                        <Link to='/contact'>
                            <a className="nav-item nav-link" href="#">Contact Us</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
