import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../Images/PageNotFound.jpg';

export default class NotFound extends Component {
    render() {
        return <div>

            <Link to="/">
                <img src={PageNotFound} alt="404" style={{
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      position: "absolute",
      left:0,
      top:0
                }} />

            </Link>

        </div>;
    }
}
