
import Hero from "./components/Hero";



  
  const App = () =>{
    
      const ItemObj = {
        name:'Nirob Hasan',
        age:33,
        city:'Dhaka'
  }

  return(
        <div>
         <Hero item={ItemObj} />
         
        </div>
  );

};

export default App;  