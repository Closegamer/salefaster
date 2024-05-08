import {Button, Divider, Text} from '@nextui-org/react';
import React, {useState} from 'react';
import {Flex} from '../styles/flex';
import axios from 'axios';

export const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailSent, setEmailSent] = useState(false)

    const handleForm = async (email, message) => {
        if(email === '' || message === '') {
           return
        }

        try {
            setEmailSent(false)
            setLoading(true)

            const request = await axios.post('/api/mailer', { email, message})

            setEmailSent(true)

            setEmail('')
            setMessage('')
        } catch (error) {
            console.error(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Flex
                direction={'column'}
                css={{
                    'gap': '1rem',
                    'pt': '$20',
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'px': '$6',
                    '@sm': {
                        justifyContent: 'space-around',
                        px: '$32',
                        flexDirection: 'row',
                    },
                    '@md': {
                        px: '$64',
                    },
                }}
            >
                <Flex direction="column">
                    <Text span css={{color: '$blue600'}}>
                        Напишите нам
                    </Text>
                    <Text h3>Контактная форма</Text>
                    <Text
                        span
                        css={{
                            maxWidth: '400px',
                            color: '$accents8',
                        }}
                    >
                        Мы рассматриваем все заявки, предложения, пожелания.
                        <br/>
                        <br/>
                    </Text>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleForm(email, message)
                    }}>
                        <div>
                            <div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className=""
                                    >
                                        Ваш email
                                    </label>
                                    <br/>
                                    <input
                                        type="email"
                                        name={"email"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Введите существующий email"
                                        className={"formInput"}
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className=""
                                >
                                    Сообщение
                                </label>
                                <br/>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Введите текст"
                                    className="formTextarea"
                                ></textarea>
                            </div>
                            <br/>
                            <div>
                                {!loading && (
                                    <Button type={'submit'}>
                                        Отправить
                                    </Button>
                                )}
                                {!!loading && (
                                    <Button type={'submit'} css={{backgroundColor: 'grey'}}>
                                        Отправляется...
                                    </Button>
                                )}
                            </div>
                            <br/>
                            <div>
                                {!!emailSent && (<p>Ваше сообщение отправлено! Спасибо!</p>)}
                            </div>
                            <br/>
                        </div>
                    </form>
                </Flex>
            </Flex>
            <Divider
                css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
            />
        </>
    );
};
export default ContactForm;
