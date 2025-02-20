
import Hero from "./components/Hero";

  const App = () =>{
     const BtnClick=()=>{
        alert("Say Hello !");
     }
  return(
        <div>
         <Hero childBtnClick={BtnClick}/>
        </div>
  );
};

export default App;  


