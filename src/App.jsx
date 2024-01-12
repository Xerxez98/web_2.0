import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components';
import Footer from './components/footer';

const App = () => {
  return (

   <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <Works />
      <Experience />
      <About />
      

      <div className='relative z-0'>
        <Contact />
        <Footer />
        <StarsCanvas />
      </div>
     
    </div>

   </BrowserRouter>

  )
}

export default App
