import './Rank.css';

function Rank({ name, entries }) {
    return (
        <div>
            <div className="rank-div-2">{`${
                name.charAt(0).toUpperCase() + name.slice(1)
            }, your current image entry is...`}</div>
            <div className="rank-div-3">{`#${entries}`}</div>
        </div>
    );
}

export default Rank;
