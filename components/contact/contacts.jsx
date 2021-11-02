import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image'
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
    const content = useRef();

    const emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;


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
        if(content.current.value.length === 0){
            alert('content를 입력해주세요');
            return;
        }
        emailjs.sendForm('service_h7k97e2', 'template_pc5ne6r', form.current, 'user_hAmOTdBCsaXezAKKeLx5a')
        .then((result) => {
            alert('메일이 전송되었습니다.');
            name.current.value = '';
            email.current.value = '';
            phone.current.value = '';
            content.current.value = '';
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    useEffect(() => {
        setTimeout(() => {
            name.current.focus();
        }, 1000)
    }, []);


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
                            <label>Name *</label>
                            <input ref={name} type="text" name="name" />
                        </S.input>
                        <S.input>
                            <label>Email *</label>
                            <input ref={email} type="email" name="email" />
                        </S.input>
                        <S.input>
                            <label>Phone</label>
                            <input ref={phone} type="text" name="phone" />
                        </S.input>
                        <S.input>
                            <label>Message *</label>
                            <textarea ref={content} name="content" />
                        </S.input>
                        <S.send type="submit" value="Send" />
                    </form>
                </S.contents>
            </S.box>
        </S.section>
    );
};

export default Contacts;