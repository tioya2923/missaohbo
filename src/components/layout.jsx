import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../images/logomissahbo.png';

import {
    container,
    heading,
    dropdown,
    navLinks,
    navLinkItem,
    navLinkText,
    dropdownContent,
    navLinkDropdown,
    navLinkSubmenu,
    dropDownItem,
    submenu,
    containerNav,
    logocss
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

    const [activeMenu, setActiveMenu] = useState(null);
    const [dropdownActive, setDropdownActive] = useState(false);
    


    const navigation = [
        { link: '/arquidiocese', text: 'Arquidiocese' },
        { link: '/noticias', text: 'Notícias' },
        { link: '/liturgia', text: 'Liturgia' },
        { link: '/catequese', text: 'Catequese' },
        { link: '/formcao', text: 'Formção' },
        { link: '/contacto', text: 'Contacto' },
        { link: '/sobrenos', text: 'Sobre Nós' },
    ];

    return (
        <div className={container}>

            <nav className={containerNav}>



                <ul className={navLinks}>
                    <Link to="/" >
                        <img src={logo} alt="Logo" className={logocss} />
                    </Link>
                    {navigation.map((nav, index) => (


                        <li key={nav.text} className={navLinkItem}>


                            <div
                                onMouseEnter={() => { setActiveMenu(index); setDropdownActive(true); }}
                                onMouseLeave={() => { setActiveMenu(null); setDropdownActive(false); }}
                                className={dropdown}

                            >

                                <Link to={nav.link} className={navLinkText}>
                                    {nav.text}
                                </Link>
                                {activeMenu === index && nav.dropdown && dropdownActive && (
                                    <ul
                                        className={dropdownContent}
                                        onMouseEnter={() => setDropdownActive(true)}
                                        onMouseLeave={() => setDropdownActive(false)}
                                    >
                                        {nav.dropdown.map((item) => (
                                            <li key={item.text} className={dropDownItem}>
                                                <Link to={item.link} className={navLinkDropdown}>
                                                    {item.text}
                                                </Link>
                                                {item.submenu && (
                                                    <ul className={submenu}>
                                                        {item.submenu.map((subitem) => (
                                                            <li key={subitem.text}>
                                                                <Link to={subitem.link} className={navLinkSubmenu}>
                                                                    {subitem.text}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
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