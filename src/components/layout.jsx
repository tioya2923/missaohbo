import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    nanLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <ul className={nanLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/arquidiocese" className={navLinkText}>Arquidiocese</Link></li>
                    <li className={navLinkItem}><Link to="/noticias" className={navLinkText}>Notícias</Link></li>
                    <li className={navLinkItem}><Link to="/liturgia" className={navLinkText}>Liturgia</Link></li>
                    <li className={navLinkItem}><Link to="/catequese" className={navLinkText}>Catequese</Link></li>
                    <li className={navLinkItem}><Link to="/formacao" className={navLinkText}>Formação</Link></li>
                    <li className={navLinkItem}><Link to="/contacto" className={navLinkText}>Contacto</Link></li>
                    <li className={navLinkItem}><Link to="/sobrenos" className={navLinkText}>Sobre nós</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout