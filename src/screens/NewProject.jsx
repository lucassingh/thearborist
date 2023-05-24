import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import '../styles/newProject.scss';
import imgbg from '../assets/background1.png'
import imgbgmobile from '../assets/bgmobile2.png';
import imgabout from '../assets/expositions.jpg'
import { useTranslation } from 'react-i18next';
import imgProject from '../assets/backgound2.png'
import 'react-multi-carousel/lib/styles.css';
import Slider from '../components/slider/Slider';

const NewProject = () => {

    const { t } = useTranslation("global");

    return (
        <>
            <section id="project" className='parent-container'>
                <BrowserView>
                    <img src={imgbg} alt="hero" className='img' />
                </BrowserView>
                <MobileView>
                    <img src={imgbgmobile} alt="hero" className='img' />
                </MobileView>
                <div className='container-project'>
                    <div className='content'>
                        <img className='img-1' src={imgabout} alt='about' />
                    </div>
                    <div className='content left'>
                        <span className='title-about'>{t('about.title')}</span><br /><br />
                        <Slider />
                    </div>
                </div>
            </section>
            <div className='container-projects'>
                <img className='img-2' src={imgProject} alt='projects' />
                <div className='container-list'>
                    <div className='card'>
                        <span className='text-card'>{t('projects.option1')}</span>
                    </div>
                    <div className='card'>
                        <span className='text-card'>{t('projects.option2')}</span>
                        <span className='text-card'>{t('projects.option2a')}</span>
                    </div>
                    <div className='card'>
                        <span className='text-card'>{t('projects.option3')}</span>
                        <span className='text-card'>{t('projects.option3a')}</span>
                    </div>
                    <div className='card'>
                        <span className='text-card'>{t('projects.option4')}</span>
                        <span className='text-card'>{t('projects.option4a')}</span>
                    </div>
                    <div className='card'>
                        <span className='text-card'>{t('projects.option5')}</span>
                        <span className='text-card'>{t('projects.option5a')}</span>
                        <span className='text-card'>{t('projects.option5c')}</span>
                    </div>
                    <div className='card'>
                        <span className='text-card'>{t('projects.option6')}</span>
                    </div>
                </div>
            </div>
        </>)
}

export default NewProject