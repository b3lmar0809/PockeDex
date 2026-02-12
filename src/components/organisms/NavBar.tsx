import React, {useState, useEffect} from "react";
import '../../style/components/organisms/NavBar.css'

const NavBar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
            if (menuOpen){
                setMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

    const toggleMenu = ():void => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = ():void => {
        setMenuOpen(false)
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">PockeDex</a>
                </div>

                {/* ✅ Botón hamburguesa SIMPLIFICADO */}
                <button
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label='Toggle menu'
                >
                    <span className="span"></span>
                    <span className="span"></span>
                    <span className="span"></span>
                </button>

                {/* ✅ Menú SIMPLIFICADO */}
                <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="li"><a href="/" onClick={closeMenu}>Inicio</a></li>
                    <li className="li"><a href='/' onClick={closeMenu}>Servicio</a></li>
                    <li className="li"><a href='/' onClick={closeMenu}>Nosotros</a></li>
                    <li className="li"><a href='/' onClick={closeMenu}>Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;