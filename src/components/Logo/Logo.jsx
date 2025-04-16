import './Logo.css';
import icon from '../../assets/icon-food.png';

function Logo() {
    return (
        <div className="logo-div">
            <img
                alt="logo"
                src={icon}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </div>
    );
}

export default Logo;
