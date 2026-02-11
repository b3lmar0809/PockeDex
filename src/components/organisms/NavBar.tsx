import  {useState, useEffect} from "react";
import ButtomAtom from "../atoms/ButtonAtom";
import TextAtom from "../atoms/TextAtom";
import '../../style/components/organisms/NavBar.css'

const NavBar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 50;
          setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">PockeDex</a>
                </div>

                <ButtomAtom className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                            text={''} onClick={toggleMenu} aria-label='Toggle menu'
                >
                    <TextAtom variant='span'>''</TextAtom>
                    <TextAtom variant='span'>''</TextAtom>
                    <TextAtom variant='span'>''</TextAtom>
                </ButtomAtom>

                <TextAtom variant='ul' className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <TextAtom variant='li' className="li-a"><a href="/">Inicio</a></TextAtom>
                    <TextAtom variant='li'><a href='/'>Servicio</a></TextAtom>
                    <TextAtom variant='li'><a href='/'>Nosotros</a></TextAtom>
                    <TextAtom variant='li'><a href='/'>Contacto</a></TextAtom>
                </TextAtom>
            </div>
        </nav>
    )
}
export default NavBar;