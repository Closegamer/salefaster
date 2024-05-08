import {Divider, Text, Image} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
                  alignItems: 'center',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     // css={{
                     //    display: 'inline',
                     // }}
                  >
                     ТЕРМОЭТИКЕТКА<br />
                  </Text>
                  {/*<Text*/}
                  {/*   h1*/}
                  {/*   css={{*/}
                  {/*      display: 'inline',*/}
                  {/*   }}*/}
                  {/*>*/}
                  {/*   for{' '}*/}
                  {/*</Text>*/}
                  <Text
                     h2
                     // css={{
                     //    fontSize: 'px',
                     // }}
                     color="primary"
                  >
                     по оптовым ценам
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  В связи с ликвидацией склада реализуется продукция по сниженной цене. Минимальный заказ - от 5000 рублей!
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  {/*<Input placeholder="Enter your email address" size="lg" />*/}
                  {/*<Button>Калькулятор</Button>*/}
               </Flex>
               <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Разные размеры
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Доставка
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Самовывоз
                  </Flex>
               </Flex>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
                <Image
                    width={'auto'}
                    height={'auto'}
                    src="thermolabel.jpg"
                    alt="thematic_image"
                />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
