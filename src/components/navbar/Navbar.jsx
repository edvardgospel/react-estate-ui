import { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);



    return (
        <nav>
            <div className="left">
                <Link to='/' className='logo'>
                    <img src="/logo.png" alt="" />
                    <span>LamaEstate</span>
                </Link>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Contact</Link>
                <Link to='/'>Others</Link>
            </div>
            <div className="right">
                <Link to='/'>Sign in</Link>
                <Link to='/' className='register'>Sign up</Link>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to='/'>About</Link>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Others</Link>
                    <Link to='/'>Sign in</Link>
                    <Link to='/' >Sign up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;