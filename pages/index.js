import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
// import Partners from '../components/Partners/Partners';
import Portfolio from '../components/Portfolio/Portfolio';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';

const Index = () => (
  <>
    <div className="bg-gray-900 text-white h-screen">
      <Navbar />
      <Banner sectionName="home" nextSection="about" />
      <About sectionName="about" nextSection="skills" />
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
  </>
);

export default Index;
