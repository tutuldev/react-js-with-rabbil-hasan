// rsc for react functional component 

import ContactForm from "./components/ContactHome";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
let marks=90;
  return (
    <div>
       <Header/>
       <Hero/>
       <ContactForm/>
       <Footer/>
       {/* self close  */}
       <button/>
       {/* class  */}
       <h1 className="">Hellow</h1>
       {/* attrubute need camel case */}
       <input onSubmit="" />
       {/* inline css  */}
       <p style={{color:'red'}}></p>
      {/* if else  */}
      {marks>80?<h1>Brilliant</h1>:<h1>Average</h1>}

    </div>
  );
};

export default App;