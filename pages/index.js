import Head from 'next/head';
import AboutUs from '../Components/Page_Components/AboutUs';
import Chat from '../Components/Page_Components/Chat';
import Footer from '../Components/Page_Components/Footer';
import Header from '../Components/Page_Components/Header';
import Hero from '../Components/Page_Components/Hero';
import PreFooter from '../Components/Page_Components/PreFooter';
import Testemonial from '../Components/Page_Components/Testemonial';
import favicon from '../public/Header/logo.png';

//Python chat
//Animacije
//Animacije na testemonial slider
//Linkovi ka sekcijama

export default function Home() {
  return (
    <div>
      <Head>
        <title>OliBot.rs</title>
        <link rel='icon' href={favicon.src} />
      </Head>
      <Header />
      <Hero />
      <AboutUs />
      <Chat />
      <Testemonial />
      <PreFooter />
      <Footer />
    </div>
  );
}
