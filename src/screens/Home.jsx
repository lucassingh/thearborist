import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import '../styles/home.scss'
import imgHero from '../assets/hero.png'
import imgHeroMobile from '../assets/heromobile.png'
import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t } = useTranslation("global");

    return (
        <>
            <section id="home">
                <div className='container-hero'>
                    <BrowserView>
                        <img src={imgHero} alt="hero" className='img' />
                    </BrowserView>
                    <MobileView>
                        <img src={imgHeroMobile} alt="hero" className='img' />
                    </MobileView>
                    <div className='hero'>
                        <span className='title-text'>{t('hero.title')}</span>
                        <span className='title-text'>{t('hero.subtitle')}</span>
                        <span className='title-text subtitle'>{t('hero.subtitle2')}</span>
                    </div>
                    <div className='values'>
                        <span className='values-text'>{t('enum1.option1')}</span>
                        <span className='values-text'>{t('enum1.option2')}</span>
                        <span className='values-text'>{t('enum1.option3')}</span>
                        <span className='values-text'>{t('enum1.option4')}</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home