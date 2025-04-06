import './Image.css';

function Image({ url }) {
    return (
        <div className="center div1">
            <div className="div2">
                {url && <img src={url} alt="" width="500px" height="auto" />}
            </div>
        </div>
    );
}

export default Image;
