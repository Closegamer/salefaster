import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const Trial = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
             <Flex direction="column">
                 <Text span css={{color: '$blue600'}}>
                     Ваша цена
                 </Text>
                 <Text h3>Коммерческое предложение</Text>
                 <Text
                     span
                     css={{
                         color: '$accents8',
                         pb: '$15',
                         textAlign: 'center',
                     }}
                 >
                     Если у Вас есть к нам предложение по цене, мы готовы его обсудить!
                 </Text>
                 {/*<Button>Предложить свою цену</Button>*/}
             </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
