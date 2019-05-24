import React from 'react'
import { Link } from 'react-router-dom'

const Header = e => {
    return (
        <div>
            <h2>THE SMURF'S</h2>
            <Link classname='nav-item' activeClassName='selected' to='/smurfs'>Welcome To The Village</Link>

            <div>
                <Link to='/smurfs' className='nav'>Smurfs</Link>
            </div>
            <div>
                <Link to='/smurf-form' className='nav'>Smurf Form</Link>
            </div>
        </div>
    )
}
export default Header;