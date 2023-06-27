import React from 'react'
import '../styles/who.scss';
import { Col, Row } from 'react-bootstrap'

const Who = () => {
    return (
        <section className='who-section'>
            <div className='bg'></div>
            <div className='container pt-5 pb-5'>
                <Row>
                    <Col md={12}>
                        <h2 className='header-section'>Lothar y Liliana Hermann</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <p className='title mb-0'>
                            La Segunda Guerra Mundial, El
                            Holocausto y la Justicia <br /> por Lothar
                            Hermann.
                        </p> <br />

                        <p className='text mb-0'>
                            A raíz de la Segunda Guerra Mundial y el
                            Holocausto, 60 millones de personas
                            fallecen y otra gran cantidad cambia el
                            rumbo de sus vidas.
                        </p>

                        <p className='text mb-0'>
                            Hermann y Eichmann eran dos familias
                            alemanas: una judía y otra nazi. Lothar huía
                            del Holocausto y Adolf escapaba de la
                            justicia que debía condenarlo por sus
                            crímenes de guerra. Ambos se reencontraron en un barrio
                            de Buenos Aires, Argentina.
                        </p>

                        <p className='text mb-0'>
                            Lothar Hermann, después de haber
                            escapado de un campo de concentración en
                        </p>
                    </Col>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <p className='text mb-0'>
                            donde sus familiares no corrieron con la
                            misma suerte, llegó a la Argentina.
                        </p>

                        <p className='text mb-0'>
                            Lothar, casi de manera casual, descubre
                            que Adolf Eichmann, quien fue responsable
                            de las deportaciones a campos de
                            concentración y mentor de la llamada
                            “solución final”, vivía desde hacía tiempo en
                            Buenos Aires.
                        </p>

                        <p className='text mb-0'>
                            Luego de años de haber reportado su
                            presencia y teniendo una persistencia
                            notable para alcanzar el objetivo de hacer
                            justicia, Lothar logró que capturaran a
                            Adolf Eichmann en Buenos Aires el 11 de
                            mayo de 1960 y lo trasladaran a Israel para
                            ser juzgado y condenado.
                        </p>

                        <p className='text mb-0'>
                            Eichmann encontró su final en la horca el
                            31 de mayo de 1961.
                        </p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Who