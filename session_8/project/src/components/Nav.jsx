import './Nav.css';

export const Nav = ({ menus = [], activeMenu, onMenuClick }) => {
    return (
        <nav className="panel">
            <ul className="nav-list">
                {menus.map((menu, idx) => (
                    <li key={idx}>
                        <a
                            href="#"
                            className={activeMenu === menu ? 'active' : ''}
                            onClick={e => {
                                e.preventDefault();
                                onMenuClick && onMenuClick(menu);
                            }}
                        >
                            {menu}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}