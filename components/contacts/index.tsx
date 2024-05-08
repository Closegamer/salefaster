import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import Link from 'next/link'
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
                                <Link
                                    href={'tel:79104223605'}>+7 910 422 3605
                                </Link>
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
                                <Link
                                    href={'mailto:salefaster@mail.ru'}>salefaster@mail.ru
                                </Link>
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
                                141009, Россия, Московская область, город Мытищи, улица Коминтерна, 15 А/2
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
