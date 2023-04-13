import { ButtonImg } from '../../components/buttonReponsive';
import { Link } from 'react-router-dom';

import './styles.css'

export function HeaderGlobal() {

    function scrollToSection(event, sectionId) {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <header id="home">
                <nav>
                    <div className="logoLeft">Rafael Keiti Azuma</div>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" id="icon">
                        <ButtonImg />
                    </label>
                    <ul>
                        <li>
                            <Link to="/" onClick={(event) => scrollToSection(event, 'home')}>
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={(event) => scrollToSection(event, 'about')}>
                                Sobre mim
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={(event) => scrollToSection(event, 'projects')}>
                                Projetos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

