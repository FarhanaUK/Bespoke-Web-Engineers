
import About from './components/About'
import BusinessName from './components/BusinessName'
import CallToAcgtion from './components/CallToAction'
import Contact from './components/Contact'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavMenu from './components/NavMenu'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import PrivacyPolicy from './components/PrivacyPolicy'
import ProcessingTimeMap from './components/ProcessingTimeMap'
import Services from './components/Services'
import TermsAndConditions from './components/TermsAndConditions'
import Testimonoals from './components/Testimonials'
import {Routes, Route} from 'react-router-dom'

function App() {
  
//add the thing for scrolling 
  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col">
      <div className='flex-grow'>

        <NavMenu/>
        <BusinessName/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="About" element={<About />} />
        <Route path="CallToAcgtion" element={<CallToAcgtion />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="FAQs" element={<FAQs />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="ProcessingTimeMap" element={<ProcessingTimeMap />} />
        <Route path="Services" element={<Services />} />
        <Route path="Testimonoals" element={<Testimonoals />} />
      </Routes>
</div>
      <Footer />
    </div>
  );
}

export default App
