import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import * as S from '../../styles/contact.Style';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faGithub, faEnvelope);

const Contacts = (props) => {
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const phone = useRef();
    const message = useRef();

    const emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    let [load, setLoad] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if(name.current.value.length === 0){
            alert('name을 입력해주세요');
            return;
        }
        if(email.current.value.length === 0){
            alert('email을 입력해주세요');
            return;
        }
        if(emailCheck.test(email.current.value) === false){
            alert('이메일형식이 올바르지 않습니다');
            return;
        }
        if(message.current.value.length === 0){
            alert('message를 입력해주세요');
            return;
        }
        setLoad(true);
        emailjs.sendForm('service_acfpkqb', 'template_6kik8tg', form.current, 'user_6f39CUXGHakLOxSbAXejn')
        .then((result) => {
            alert('메일이 전송되었습니다.');
            setLoad(false);
            name.current.value = '';
            email.current.value = '';
            phone.current.value = '';
            message.current.value = '';
        }, (error) => {
            console.log(error.text);
        });
    };

    const onTextareaEnter = () => {
        localStorage.setItem('contact', 'textarea');
    }

    const onTextareaLeave = () => {
        localStorage.setItem('contact', 'leave');
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         name.current.focus();
    //     }, 1000)
    // }, []);


    return (
        <S.section>
            <S.box>
                <S.left>
                    <p>Contact</p>
                    <S.link>
                        <a href="mailto:guohjp@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Gmail</span>
                        </a>
                        <a href="https://github.com/Park1016" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                            <span>Github</span>
                        </a>
                    </S.link>
                </S.left>
                <S.contents>
                    <form ref={form} onSubmit={sendEmail}>
                        <S.input>
                            <label htmlFor="name">Name *</label>
                            <input ref={name} type="text" name="name" id="name" />
                        </S.input>
                        <S.input>
                            <label htmlFor="email">Email *</label>
                            <input ref={email} type="email" name="email" id="email" />
                        </S.input>
                        <S.input>
                            <label htmlFor="phone">Phone</label>
                            <input ref={phone} type="text" name="phone" id="phone" />
                        </S.input>
                        <S.input>
                            <label htmlFor="message">Message *</label>
                            <textarea ref={message} name="message" id="message" onMouseEnter={onTextareaEnter} onMouseLeave={onTextareaLeave}/>
                        </S.input>
                        <S.send type="submit" value="Send" />
                    </form>
                    {load && <S.loading>
                        <Image 
                            src="/loading3.svg"
                            alt="loading"
                            width={200}
                            height={200}
                        />
                    </S.loading>}
                </S.contents>
            </S.box>
        </S.section>
    );
};

export default Contacts;