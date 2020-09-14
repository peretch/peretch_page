import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Partners from '../components/Partners/Partners';
import Portfolio from '../components/Portfolio/Portfolio';
import Technologies from '../components/Technologies/Technologies';
// import Profile from '../components/Profile/Profile';

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
      <About />
      {/* <Profile /> */}
      <Portfolio />
      <Partners />
      <Technologies bgImage="img/unsplash/reza-namdari-ZgZsKFnSbEA-unsplash.jpg" />
      <Contact bgImage="img/unsplash/kt-PxWXhc4xWeg-unsplash.jpg" />
    </div>
  </div>
);

export default Index;
