import { Button, Card, Divider, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Products = () => {
    return (
        <>
            <Flex
                css={{ py: '$20', gap: '1rem', px: '$6' }}
                justify={'center'}
                wrap={'wrap'}
                direction={'column'}
                align={'center'}
            >
                <Flex direction={'column'} align={'left'}>
                    <Text span css={{ color: '$blue600' }}>
                        Большой ассортимент
                    </Text>
                    <Text h2>Доступные размеры</Text>
                </Flex>

                <Flex
                    css={{ gap: '2rem', width: '100%' }}
                    wrap={'wrap'}
                    justify={'center'}
                >
                    <Card css={{ p: '$6', mw: '400px' }}>
                        <Card.Header>
                            <Grid.Container css={{ pl: '$6' }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: '$xs' }}>
                                        75 х 120
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{color: '$accents8'}}>
                                        Термоэтикетка самоклеящаяся размером 75 на 120 мм по 300 штук в рулоне{' '}
                                        <br/>
                                        <br/>
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: '$4' }}>
                            <Text css={{ display: 'contents' }} h2>
                                ₽156,73{' '}
                            </Text>
                            <Text css={{ display: 'contents', color: '$accents8' }}>/рулон</Text>
                            <Button css={{ mt: '$7', mb: '$12' }}>Уменьшить цену</Button>

                            <Divider />
                            <Box as={'ul'}>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        300 штук в рулоне
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        В наличии на складе
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        Размеры указаны в мм
                                    </Text>
                                </Flex>
                            </Box>
                        </Card.Body>
                    </Card>
                    <Card css={{ p: '$6', mw: '400px' }}>
                        <Card.Header>
                            <Grid.Container css={{ pl: '$6' }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: '$xs' }}>
                                        58 х 40
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{color: '$accents8'}}>
                                        Термоэтикетка самоклеящаяся размером 58 на 40 мм по 700 штук в рулоне{' '}
                                        <br/>
                                        <br/>
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: '$4' }}>
                            <Text css={{ display: 'contents' }} h2>
                                ₽98,57{' '}
                            </Text>
                            <Text css={{ display: 'contents', color: '$accents8' }}>/рулон</Text>
                            <Button css={{ mt: '$7', mb: '$12' }}>Уменьшить цену</Button>

                            <Divider />
                            <Box as={'ul'}>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        700 штук в рулоне
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        В наличии на складе
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        Размеры указаны в мм
                                    </Text>
                                </Flex>
                            </Box>
                        </Card.Body>
                    </Card>
                    <Card css={{ p: '$6', mw: '400px' }}>
                        <Card.Header>
                            <Grid.Container css={{ pl: '$6' }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: '$xs' }}>
                                        58 х 40
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{color: '$accents8'}}>
                                        Термоэтикетка самоклеящаяся размером 58 на 40 мм по 500 штук в рулоне{' '}
                                        <br/>
                                        <br/>
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: '$4' }}>
                            <Text css={{ display: 'contents' }} h2>
                                ₽70,98{' '}
                            </Text>
                            <Text css={{ display: 'contents', color: '$accents8' }}>/рулон</Text>
                            <Button css={{ mt: '$7', mb: '$12' }}>Уменьшить цену</Button>

                            <Divider />
                            <Box as={'ul'}>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        500 штук в рулоне
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        В наличии на складе
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        Размеры указаны в мм
                                    </Text>
                                </Flex>
                            </Box>
                        </Card.Body>
                    </Card>
                    <Card css={{ p: '$6', mw: '400px' }}>
                        <Card.Header>
                            <Grid.Container css={{ pl: '$6' }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: '$xs' }}>
                                        30 х 20
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{color: '$accents8'}}>
                                        Термоэтикетка самоклеящаяся размером 30 на 20 мм по 2000 штук в рулоне{' '}
                                        <br/>
                                        <br/>
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: '$4' }}>
                            <Text css={{ display: 'contents' }} h2>
                                ₽79,09{' '}
                            </Text>
                            <Text css={{ display: 'contents', color: '$accents8' }}>/рулон</Text>
                            <Button css={{ mt: '$7', mb: '$12' }}>Уменьшить цену</Button>

                            <Divider />
                            <Box as={'ul'}>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        2000 штук в рулоне
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        В наличии на складе
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        Размеры указаны в мм
                                    </Text>
                                </Flex>
                            </Box>
                        </Card.Body>
                    </Card>
                    <Card css={{ p: '$6', mw: '400px' }}>
                        <Card.Header>
                            <Grid.Container css={{ pl: '$6' }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: '$xs' }}>
                                        43 х 25
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{color: '$accents8'}}>
                                        Термоэтикетка самоклеящаяся размером 43 на 25 мм по 1000 штук в рулоне{' '}
                                        <br/>
                                        <br/>
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: '$4' }}>
                            <Text css={{ display: 'contents' }} h2>
                                ₽68,33{' '}
                            </Text>
                            <Text css={{ display: 'contents', color: '$accents8' }}>/рулон</Text>
                            <Button css={{ mt: '$7', mb: '$12' }}>Уменьшить цену</Button>

                            <Divider />
                            <Box as={'ul'}>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        1000 штук в рулоне
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        В наличии на складе
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        Размеры указаны в мм
                                    </Text>
                                </Flex>
                            </Box>
                        </Card.Body>
                    </Card>
                    <Card css={{ p: '$6', mw: '400px' }}>
                        <Card.Header>
                            <Grid.Container css={{ pl: '$6' }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: '$xs' }}>
                                        58 х 60
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{color: '$accents8'}}>
                                        Термоэтикетка самоклеящаяся размером 58 на 60 мм по 400 штук в рулоне{' '}
                                        <br/>
                                        <br/>
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: '$4' }}>
                            <Text css={{ display: 'contents' }} h2>
                                ₽83,46{' '}
                            </Text>
                            <Text css={{ display: 'contents', color: '$accents8' }}>/рулон</Text>
                            <Button css={{ mt: '$7', mb: '$12' }}>Уменьшить цену</Button>

                            <Divider />
                            <Box as={'ul'}>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        400 штук в рулоне
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        В наличии на складе
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        Размеры указаны в мм
                                    </Text>
                                </Flex>
                            </Box>
                        </Card.Body>
                    </Card>
                    <Card css={{ p: '$6', mw: '400px' }}>
                        <Card.Header>
                            <Grid.Container css={{ pl: '$6' }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: '$xs' }}>
                                        58 х 60
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{color: '$accents8'}}>
                                        Термоэтикетка самоклеящаяся размером 58 на 60 мм по 450 штук в рулоне{' '}
                                        <br/>
                                        <br/>
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: '$4' }}>
                            <Text css={{ display: 'contents' }} h2>
                                ₽91,57{' '}
                            </Text>
                            <Text css={{ display: 'contents', color: '$accents8' }}>/рулон</Text>
                            <Button css={{ mt: '$7', mb: '$12' }}>Уменьшить цену</Button>

                            <Divider />
                            <Box as={'ul'}>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        450 штук в рулоне
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        В наличии на складе
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        Размеры указаны в мм
                                    </Text>
                                </Flex>
                            </Box>
                        </Card.Body>
                    </Card>
                    <Card css={{ p: '$6', mw: '400px' }}>
                        <Card.Header>
                            <Grid.Container css={{ pl: '$6' }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: '$xs' }}>
                                        30 х 20
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{color: '$accents8'}}>
                                        Термоэтикетка самоклеящаяся размером 30 на 20 мм по 1800 штук в рулоне{' '}
                                        <br/>
                                        <br/>
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: '$4' }}>
                            <Text css={{ display: 'contents' }} h2>
                                ₽71,29{' '}
                            </Text>
                            <Text css={{ display: 'contents', color: '$accents8' }}>/рулон</Text>
                            <Button css={{ mt: '$7', mb: '$12' }}>Уменьшить цену</Button>

                            <Divider />
                            <Box as={'ul'}>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        1800 штук в рулоне
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        В наличии на складе
                                    </Text>
                                </Flex>
                                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                                    <CheckIcon />
                                    <Text span css={{ color: '$accents8' }}>
                                        Размеры указаны в мм
                                    </Text>
                                </Flex>
                            </Box>
                        </Card.Body>
                    </Card>
                </Flex>
            </Flex>

            <Divider
                css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
            />
        </>
    );
};
