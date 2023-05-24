import React, { useState } from 'react'
import './Tabs.css'
import { useTranslation } from 'react-i18next';

export const Exhibition = () => {

    const { t } = useTranslation("global");

    return (
        <>
            <span>{t('tabbodyexibition.text1')}</span><br />
            <span>•</span> <span>{t('tabbodyexibition.text2')}</span> <br />
            <span>•</span> <span>{t('tabbodyexibition.text3')}</span> <br />
            <span>•</span> <span>{t('tabbodyexibition.text4')}</span> <br />
            <span>•</span> <span>{t('tabbodyexibition.text5')}</span> <br />
            <span>•</span> <span>{t('tabbodyexibition.text6')}</span> <br />
            <span>•</span> <span>{t('tabbodyexibition.text7')}</span><br />
            <span>{t('tabbodyexibition.text8')}</span><br />
            <span><strong>{t('tabbodyexibition.text9')}</strong></span><br />
            <span>{t('tabbodyexibition.text10')}</span><br />
            <span>{t('tabbodyexibition.text11')}</span><br />
            <span>{t('tabbodyexibition.text12')}</span><br />
        </>
    )
}

export const Documentary = () => {

    const { t } = useTranslation("global");

    return (
        <>
            <span>{t('tabbodydocumentary.text1')}</span><br />
            <span>{t('tabbodydocumentary.text2')}</span> <br />
            <span>{t('tabbodydocumentary.text3')}</span>
        </>
    )
}

export const Book = () => {

    const { t } = useTranslation("global");

    return (
        <>
            <span>{t('tabbodybook.text1')}</span><br />
            <span>{t('tabbodybook.text2')}</span> <br />
            <span>{t('tabbodybook.text3')}</span>
        </>
    )
}

const Tabs = ({ config }) => {

    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className='container-tabs'>
            <div className='tab'>
                <div className='tab-headers'>
                    {
                        config.map((entry, index) => (
                            <div
                                key={index}
                                className={`tab-header ${activeTab === index ? "active" : ""}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {entry.header}
                            </div>
                        ))
                    }
                </div>
                <div className='tab-body'>
                    {config[activeTab].component}
                </div>
            </div>
        </div>
    )
}

export default Tabs;