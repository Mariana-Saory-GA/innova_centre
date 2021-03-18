import React, {useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import { Form } from 'react-bootstrap'
import FillForm from '../../../img/Images/FillForm.svg';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(38, 7, 112, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    top: 0px;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 540px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    top: 30px;
`

const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: rgb(240, 197, 8, 0.8);
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    h1{
        position: absolute;
        top: 40px;
    }

    Form{
        position: absolute;
        top: 120px;
    }

    p{
        margin-bottom: 1rem;
        position: relative;
        top: 90px;
    }
    button{
        padding: 8px 22px;
        background: #56137c;
        color: #fff;
        border: none;
        border-radius: 4px;
        position: relative;
        top: 180px;
    }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    color: #260770;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

export const QuoteForm = ({showQuoteForm, setShowQuoteForm}) => {
    const modalRef = useRef ()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showQuoteForm ? 1 : 0,
        transform: showQuoteForm ? `translateX(0%)` : `translateX(100%)`
    });

    const closeModalqf = e => {
        if(modalRef.current === e.target){
            setShowQuoteForm(false)
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showQuoteForm){
            setShowQuoteForm(false)
        }
    }, 
    [setShowQuoteForm, showQuoteForm]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, 
    [keyPress]
    );

    return( 
    <> 
    {showQuoteForm ? (
        <Background ref={modalRef} onClick={closeModalqf}>
            <animated.div style={animation}>
            <ModalWrapper showQuoteForm={showQuoteForm}>
                <ModalImg src={FillForm} alt='fillForm'/>
                <ModalContent>
                <h1> ¡Cotiza con nosotros! </h1>
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Control placeholder="Nombre"/>
                                </Form.Group>
                                <Form.Group controlId="formCompany">
                                    <Form.Control placeholder="Empresa"/>
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Control placeholder="Correo electrónico"/>
                                </Form.Group>
                                <Form.Group controlId="formPhone">
                                    <Form.Control placeholder="Teléfono de contacto"/>
                                </Form.Group>
                                <Form.Group controlId="formService">
                                            <Form.Control as="select" defaultValue="Servicio">
                                                <option> Seleccione un servicio </option>
                                                <option> Página Web </option>
                                                <option> Marketing Digital </option>
                                                <option> Ecommerce </option>
                                            </Form.Control>
                                        </Form.Group>
                            </Form>
                            <button> Enviar </button>
                </ModalContent>
                <CloseModalButton aria-label="Close modal" onClick={() => setShowQuoteForm(prev => !prev)}/>
            </ModalWrapper>
            </animated.div>
        </Background>
    ) : null}
    </>
    )
};