import React from 'react'
import '../styles/who.scss';
import { Col, Row, Image } from 'react-bootstrap'
import icon from '../assets/icon.png'

const Who = () => {
    return (
        <section className='who-section'>
            <div className='bg'></div>
            <div className='container'>
                <Row>
                    <Col md={12} className='text-center'>
                        <h2 className='header-section'>Lothar y Liliana Hermann</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className='mt-3'>
                        <div className='text-center mb-2 mt-2'>
                            <Image src={icon} className='icon' alt='book' />
                        </div>
                        <Row className='mt-3'>
                            <span className='text'>
                                La Segunda Guerra Mundial, El
                                Holocausto y la Justicia por Lothar
                                Hermann.
                            </span>
                            <span className='text'>
                                A raíz de la Segunda Guerra Mundial y el
                                Holocausto, 60 millones de personas
                                fallecen y otra gran cantidad cambia el
                                rumbo de sus vidas.
                            </span>
                            <span className='text'>
                                Hermann y Eichmann eran dos familias
                                alemanas: una judía y otra nazi. Lothar huía
                                del Holocausto y Adolf escapaba de la
                                justicia que debía condenarlo por sus
                                crímenes de guerra.
                            </span>
                        </Row>
                    </Col>
                    <Col md={4} className='mt-3'>
                        <div className='text-center mb-2 mt-2'>
                            <Image src={icon} className='icon' alt='book' />
                        </div>
                        <Row className='mt-3'>
                            <span className='text'>
                                Ambos se reencontraron en un barrio
                                de Buenos Aires, Argentina.
                            </span>
                            <span className='text'>
                                Lothar Hermann, después de haber
                                escapado de un campo de concentración en donde sus familiares no corrieron con la misma suerte, llegó a la Argentina.
                            </span>
                            <span className='text'>
                                Lothar, casi de manera casual, descubre
                                que Adolf Eichmann, quien fue responsable
                                de las deportaciones a campos de
                                concentración y mentor de la llamada
                                “solución final”,
                            </span>
                        </Row>
                    </Col>
                    <Col md={4} className='mt-3'>
                        <div className='text-center mb-2 mt-2'>
                            <Image src={icon} className='icon' alt='book' />
                        </div>
                        <Row className='mt-3'>
                            <span className='text'>
                                vivía desde hacía tiempo en
                                Buenos Aires.
                            </span>
                            <span className='text'>
                                Luego de años de haber reportado su
                                presencia y teniendo una persistencia
                                notable para alcanzar el objetivo de hacer
                                justicia, Lothar logró que capturaran a
                                Adolf Eichmann en Buenos Aires el 11 de
                                mayo de 1960 y lo trasladaran a Israel para
                                ser juzgado y condenado.
                            </span>
                            <span className='text'>
                                Eichmann encontró su final en la horca el
                                31 de mayo de 1961.
                            </span>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Who