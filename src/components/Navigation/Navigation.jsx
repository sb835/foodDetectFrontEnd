import './Navigation.css';

function Navigation({ onRouteChange, signedIn }) {
    return (
        <nav className="sign">
            <p className="link" onClick={() => onRouteChange('signin')}>
                Sign Out
            </p>
        </nav>
    );
}

export default Navigation;
