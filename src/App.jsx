import { useRef } from "react";


  const App = () =>{
    
  let myHeadLine= useRef();

  const change =()=>{
  // myHeadLine.current.innerText="Hellow UseRef";
  // myHeadLine.current.innerHTML="<ul><li>A</li><li>B</li></ul>";

  // when not using current 
  myHeadLine.innerHTML="<ul><li>A</li><li>B</li></ul>";

  }

  return(
        <div>
          {/* using with current method  */}
          {/* <h1 ref={myHeadLine}></h1> */}
          
          {/* when not using current  */}
          <h1 ref={(h1)=>myHeadLine=h1}></h1>
          <button onClick={change}>Click</button>
        </div>
  );
};

export default App;  


