import './Image.css';

function Image({ url }) {
    return (
        <div className="center div1">
            <div className="div2">
                {url && <img src={url} alt="" className="detected-image" />}
            </div>
        </div>
    );
}

export default Image;
