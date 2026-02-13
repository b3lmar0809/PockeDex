import React, {useState, useEffect} from "react";
import ButtomAtom from "../atoms/ButtonAtom";
import TextAtom from "../atoms/TextAtom";
import '../../style/components/organisms/NavBar.css'

const NavBar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

                <ButtomAtom className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                            onClick={toggleMenu} aria-label='Toggle menu'
                >
                    <TextAtom variant='span' className="span"> </TextAtom>
                    <TextAtom variant='span' className="span"> </TextAtom>
                    <TextAtom variant='span' className="span"> </TextAtom>
                </ButtomAtom>

                <TextAtom variant='ul' className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <TextAtom variant='li' className="li"><a href="/" onClick={closeMenu}>Inicio</a></TextAtom>
                    <TextAtom variant='li' className="li"><a href='/' onClick={closeMenu}>Servicio</a></TextAtom>
                    <TextAtom variant='li' className="li"><a href='/' onClick={closeMenu}>Nosotros</a></TextAtom>
                    <TextAtom variant='li' className="li"><a href='/' onClick={closeMenu}>Contacto</a></TextAtom>
                </TextAtom>
            </div>
        </nav>
    )
}
export default NavBar;