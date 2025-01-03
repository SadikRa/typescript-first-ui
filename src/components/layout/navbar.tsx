import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex items-center gap-3 h-16 mx-auto max-w-7xl'>
            <div className='flex items-center'>
                <p>task master</p>
            </div>
            <Link to={'/'}>task</Link>
            <Link to={'/users'}>users</Link>
            <Link to={'/login'}>login</Link>
        </nav>
    );
};

export default Navbar;