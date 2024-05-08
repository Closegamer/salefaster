import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Products} from '../components/products';
import {Box} from '../components/styles/box';
import {Contacts} from '../components/contacts';
import {ContactForm} from '../components/contactform';
import {Trial} from '../components/trial';
import {Footer} from '../components/footer';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <Products />
            <Contacts />
            <ContactForm />
            <Trial />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
