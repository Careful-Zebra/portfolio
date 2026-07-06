import './Nav.css'

export default function Nav() {
    return(
            <nav>
                <a href="#" className="name-link">Viktor Mooren</a>
                <ul className="nav-links">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        
    )
}