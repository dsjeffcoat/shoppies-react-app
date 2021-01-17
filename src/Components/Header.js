import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        {/* <i className="fa fa-film"></i> */}
                        <h1>The Shoppies</h1>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/nomination">Nominations</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};