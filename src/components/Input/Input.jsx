import './Input.css';

function Input({ onInputChange, onButtonPress }) {
    return (
        <div>
            <p className="p1">
                {
                    'Enter an image URL to let the model identify any food it sees.'
                }
            </p>
            <div className="center">
                <div className="input-wrapper center">
                    <input
                        type="tex"
                        className="input1"
                        onChange={onInputChange}
                    />
                    <button className="button1" onClick={onButtonPress}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Input;
