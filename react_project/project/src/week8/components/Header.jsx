import './Header.css';

export const Header = (props) => {
    
    return (
        <header className="panel">
            {props.text}
        </header>
    )
}
