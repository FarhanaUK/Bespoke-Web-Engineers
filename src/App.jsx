import CookieConsent from 'react-cookie-consent'
import About from './components/About'
import BusinessName from './components/BusinessName'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import BookNow from './components/BookNow'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavMenu from './components/NavMenu'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import PrivacyPolicy from './components/PrivacyPolicy'
import ProcessingTimeMap from './components/ProcessingTimeMap'
import PromoBanner from './components/PromoBanner'
import Services from './components/Services'
import TermsAndConditions from './components/TermsAndConditions'
import Testimonials from './components/Testimonials'
import {Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'


function App() {
  
//add the thing for scrolling 
  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col">
       <CookieConsent
      location="bottom" // bar appears at bottom
      buttonText="Accept Cookies" // button text
      cookieName="bespokeCookieConsent" // custom cookie name
      style={{
        background: "#333", // dark background for the bar
        color: "white", // text color
        fontSize: "14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
      }}
      buttonStyle={{
        backgroundColor: "#4CAF50", // green button
        color: "white",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "8px 15px",
        cursor: "pointer",
      }}
      declineButtonText="Decline" // decline button text
      enableDeclineButton // show decline button
      declineButtonStyle={{
        backgroundColor: "#f44336", // red decline button
        color: "white",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "8px 15px",
        cursor: "pointer",
        marginLeft: "10px",
      }}
      onAccept={() => {
        console.log("Cookies accepted!");
      }}
      onDecline={() => {
        console.log("Cookies declined!");
      }}
      expires={150} // cookie expiry in days
      hideOnAccept={true} // hide bar after accept
    >
      This website uses cookies to enhance your experience.{" "}
      <span style={{ fontSize: "12px", opacity: 0.8 }}>
        You can decline or accept.
      </span>
    </CookieConsent>


        <PromoBanner/>
        <NavMenu/>
        <BusinessName/>
        

        <main className='flex-grow '>
        <ScrollToTop />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="About" element={<About />} />
        <Route path="BookNow" element={<BookNow />} />
        <Route path="CallToAction" element={<CallToAction />} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="FAQs" element={<FAQs />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="ProcessingTimeMap" element={<ProcessingTimeMap />} />
        <Route path="Services" element={<Services />} />
        <Route path="Testimonials" element={<Testimonials />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
