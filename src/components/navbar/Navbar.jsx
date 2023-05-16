import React, { useState } from 'react'
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss'
import { useTranslation } from "react-i18next";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggler = () => setMenuOpen((p) => !p);

    const { t, i18n } = useTranslation("global");

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbar__content}>
                    <Link to='home' className={styles.logo} spy={true} smooth={true} duration={500}>
                        <img src={logo} alt="brand" width='90%' />
                    </Link>
                    <div>
                        <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                            <Link className={styles.nav__item}
                                to="project" spy={true} smooth={true} duration={500}
                            >
                                {t('header.link2')}
                            </Link>
                            <Link className={styles.nav__item}
                                to="arborist" spy={true} smooth={true} duration={500}
                            >
                                {t('header.link3')}
                            </Link>
                        </nav>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems:'center' }}>
                        <button style={{background:'none', color:'#dbb543', padding:'8px', marginRight:'20px', border: '1px solid #fff', cursor:'pointer'}}>
                            <Link to='contact' spy={true} smooth={true} duration={500} >{t('header.link4')}</Link>
                        </button>
                        {
                            i18n.language === 'es' ? (
                                <span onClick={() => i18n.changeLanguage("en")} style={{ marginRight: '15px', cursor:'pointer' }}>EN</span>
                            ) : (
                                <span onClick={() => i18n.changeLanguage("es")} style={{ marginRight: '15px', cursor:'pointer' }}>ES</span>
                            )
                        }
                    </div>
                    <div className='mobile'>
                        <div onClick={menuToggler} >
                            {!menuOpen ? <BiMenuAltRight size={25} /> : <AiOutlineClose size={25} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar