import {Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               {/*<Divider*/}
               {/*   css={{*/}
               {/*      mt: '$14',*/}
               {/*      display: 'flex',*/}
               {/*      justifyContent: 'center',*/}
               {/*   }}*/}
               {/*/>*/}
               <Flex
                  justify={'between'}
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >

                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{color: '$accents8'}}>
                        © 2024 Salefaster MP
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
