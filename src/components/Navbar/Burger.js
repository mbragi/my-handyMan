import { useState } from 'react';
import MobileMenu from '../MobileMenu/Mobile-Menu';
import './BurgerStyle.css';

const Burger = () => {
    const [modal, setModal] = useState(false);
    return(
    <div className="container">
        <div onClick={() => setModal(true)}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
        </div>
        {
            modal && <MobileMenu setModal={setModal}/>
        }
        
    </div>
    )
}    

export default Burger





