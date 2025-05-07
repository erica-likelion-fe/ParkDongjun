import './Card.css';

export const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <div className="card-header">
                <img className="card-image" src={imageUrl} alt={title} />
                <h2>{title}</h2>
            </div>            
            <p>{description}</p>
            <button onClick={()=>{HelloMessagePopup('hi')}}>button</button>
        </div>
    );
}

const HelloMessagePopup = (message) => {
    return (
        console.log(message) // This is just a placeholder for the popup functionality
    );
}