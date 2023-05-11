import React from 'react'
import '../styles/contact.scss'
import { useTranslation } from 'react-i18next';
import imgLogos from '../assets/logos.png'
import Footer from '../components/footer/Footer';

const Contact = () => {

    const { t } = useTranslation("global");

    return (
        <section id="contact" className='contact-section'>
            <div className='container-section'>
                <div className='content-data'>
                    <div className='contact-card'>
                        <img src={imgLogos} alt="logos" width='90%'/>
                    </div>
                    <div className='contact-card'>
                        <div className='contact-text-container'>
                            <span className='title-card'>{t('contact.text')}</span><br />
                            <span>+1-305-776-1667</span><br />
                            <span>info@thearboristsproject.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Contact