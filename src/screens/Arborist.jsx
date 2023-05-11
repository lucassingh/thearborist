import React from 'react'
import '../styles/arborist.scss';
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import { useTranslation } from 'react-i18next';

const Arborist = () => {

    const { t } = useTranslation("global");

    return (
        <section id="arborist" className='arborist-section'>
            <div className='container-text'>
                <span className='title'>{t('arborist.title')}</span>
                <span className='text'>
                    {t('arborist.text1')}
                    <span className='textb'> {t('arborist.text2')} </span> {t('arborist.text3')} <span className='textc'>{t('arborist.text4')} </span>
                    {t('arborist.text5')}
                </span>
            </div>
            <div className='container-cards'>
                <div className='card'>
                    <img src={img1} alt="" width='100%' height='100%' />
                </div>
                <div className='card'>
                    <img src={img2} alt="" width='100%' height='100%' />
                </div>
                <div className='card'>
                    <img src={img3} alt="" width='100%' height='100%' />
                </div>
            </div>
        </section>
    )
}

export default Arborist