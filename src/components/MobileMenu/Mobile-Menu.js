import "./Mobile-Menu.css"
import { Link } from 'react-router-dom';
import {path} from '../../routes';

function MobileMenu (props) {
    return (
        <div className="menu-overlay">
            <div className="menu-container">
                <p onClick={() => props.setModal(false)} style={{color: '#7f7f7f7f', position: 'absolute', top: '10px', right: '10px'}}>X</p>
        <ul className='side-menu'>
            <li className='side-menu-link'>
                <Link to={path.profile}>Profile</Link>
            </li>
            <li className='side-menu-link'>
                <Link to={path.blog}>Blog</Link>
            </li>
            <li className='side-menu-link'>
                <Link to={path.contact}>Contact</Link>
            </li>
            <li className='side-menu-link'>
                <Link to={path.login}>Login</Link>
            </li>
        </ul>
            </div>
        </div>
    );
}


export default MobileMenu;