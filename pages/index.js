import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
// import Partners from '../components/Partners/Partners';
import Portfolio from '../components/Portfolio/Portfolio';
import Technologies from '../components/Technologies/Technologies';
import Profile from '../components/Profile/Profile';
import Skills from '../components/Skills/Skills';

const Index = () => (
  <div>
    <Head>
      <title>Peretch</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="css/tailwind.css" rel="stylesheet" />
      <link rel="stylesheet" href="css/owlcarousel/dist/owl.carousel.min.js" />
      <link
        rel="stylesheet"
        href="css/owlcarousel/dist/assets/owl.theme.default.min.css"
      />
    </Head>
    <div className="bg-gray-900 text-white">
      <Navbar />
      <About sectionName="about" nextSection="profile" />
      <Profile sectionName="profile" nextSection="skills" />
      <Skills sectionName="skills" nextSection="technologies" />
      <Technologies
        sectionName="technologies"
        bgImage="img/unsplash/reza-namdari-ZgZsKFnSbEA-unsplash.jpg"
        nextSection="portfolio"
      />
      <Portfolio sectionName="portfolio" nextSection="contact" />
      <Contact
        sectionName="contact"
        bgImage="img/unsplash/kt-PxWXhc4xWeg-unsplash.jpg"
        nextSection=""
      />
    </div>
  </div>
);

export default Index;
