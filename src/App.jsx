// rsc for react functional component 

import ContactForm from "./components/ContactHome";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
       <Header/>
       <Hero/>
       <ContactForm/>
       <Footer/>
    </div>
  );
};

export default App;