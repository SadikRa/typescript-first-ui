import { Link } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
    return (
        <nav className='flex items-center gap-3 h-16 mx-auto max-w-7xl'>
            <div className='flex items-start'>
                <p>task master</p>
            </div>
            <Link className='bg-red-600' to={'/'}>task</Link>
            <Link to={'/users'}>users</Link>
            <Link to={'/login'}>login</Link>
            <div>
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    );
};

export default Navbar;