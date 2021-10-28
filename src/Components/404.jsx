import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const NotFound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div>
                    <div className="notfound-404">
                        {/* <h1>!</h1>  */}
                    </div>
                    <h2>
                        Error
                        <br />
                        404
                    </h2>
                </div>
                <p >
                    The page you are looking for might have been removed had its name
                    changed or is temporarily unavailable.
                    <Link to="/posts" className="a">
                        GO TO THE POSTS
                    </Link>
                </p>
            </div>
        </div>
    );
};
