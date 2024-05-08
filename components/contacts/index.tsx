import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Contacts = () => {
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
                        Свяжитесь с нами
                    </Text>
                    <Text h3>Контакты</Text>
                    <Text
                        span
                        css={{
                            maxWidth: '400px',
                            color: '$accents8',
                        }}
                    >
                        Склад работает с 10:00 до 17:00.
                    </Text>

                    <Flex
                        css={{
                            py: '$10',
                            gap: '$5',
                        }}
                    >
                        <BoxIcon />
                        <Flex direction={'column'}>
                            <Text h4 weight={'medium'}>
                                Телефон
                            </Text>
                            <Text
                                span
                                css={{
                                    maxWidth: '400px',
                                    color: '$accents8',
                                }}
                            >
                                +7 903 XXX XX XX,
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        css={{
                            py: '$10',
                            gap: '$5',
                        }}
                    >
                        <BoxIcon />
                        <Flex direction={'column'}>
                            <Text h4 weight={'medium'}>
                                Электронная почта
                            </Text>
                            <Text
                                span
                                css={{
                                    maxWidth: '400px',
                                    color: '$accents8',
                                }}
                            >
                                salefaster@mail.ru
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        css={{
                            py: '$10',
                            gap: '$5',
                        }}
                    >
                        <BoxIcon />
                        <Flex direction={'column'}>
                            <Text h4 weight={'medium'}>
                                Адрес склада для самовывоза
                            </Text>
                            <Text
                                span
                                css={{
                                    maxWidth: '400px',
                                    color: '$accents8',
                                }}
                            >
                                Москва, Улица Бабушкина,
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                {/*<Flex align={'center'}>*/}
                {/*    <FeatureIcon />*/}
                {/*</Flex>*/}
            </Flex>
            <Divider
                css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
            />
        </>
    );
};
