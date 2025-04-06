import './Logo.css';
import icon from '../../assets/icon-food.png';

function Logo() {
    return (
        <div className="logo-div">
            <img alt="logo" src={icon} />
        </div>
    );
}

export default Logo;
