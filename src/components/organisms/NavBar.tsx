import React, {useState, useEffect} from "react";
import ButtomAtom from "../atoms/ButtonAtom";
import TextAtom from "../atoms/TextAtom";
import '../../style/components/organisms/NavBar.css'

const NavBar: React.FC = () => {
    // estados del componente
    const [scrolled, setScrolled] = useState<boolean>(false); // controla si el usuario ha hecho scroll
    const [menuOpen, setMenuOpen] = useState<boolean>(false); // controla si el menu movil esta abierto

    // detecta el scroll para cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = (): void => {
            const isScrolled = window.scrollY > 50; // Si el scroll es mayor a 50px
            setScrolled(isScrolled); // actualiza el estado
        };

        // agrega el listener cuando el componente se monta
        window.addEventListener('scroll', handleScroll);

        // limpia el listener cuando el componente se desmonta
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // array vacio = solo se ejecuta al montar/desmontar

    // alterna entre abrir y cerrar el menu movil
    const toggleMenu = ():void => {
        setMenuOpen(!menuOpen); // cambia el estado al opuesto
    };

    // cierra el menu movil (usado al hacer clic en un link)
    const closeMenu = ():void => {
        setMenuOpen(false)
    }

    return (
        // aplica la clase 'scrolled' dinamicamente cuando scrolled=true
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">PockeDex</a>
                </div>
                {/* boton hamburguesa - solo visible en móvil */}
                {/* aplica la clase 'active' cuando menuOpen=true para la animacion de x */}
                <ButtomAtom className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                            onClick={toggleMenu} aria-label='Toggle menu'// accesibilidad para lectores de pantalla
                >
                    <TextAtom variant='span' className="span"> </TextAtom>
                    <TextAtom variant='span' className="span"> </TextAtom>
                    <TextAtom variant='span' className="span"> </TextAtom>
                </ButtomAtom>
                {/* aplica la clase 'active' cuando menuOpen=true para mostrarlo en movil */}
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