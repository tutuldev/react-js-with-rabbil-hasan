import { useRef } from "react";


  const App = () =>{
    
  let myImage= useRef();

  const change =()=>{

  myImage.current.src="https://placehold.co/600x400?text=Hello\nWorld";
  myImage.current.setAttribute('height','200px');
  myImage.current.setAttribute('width','300px');

  }

  return(
        <div>
          {/* when not using current  */}

          <img ref={myImage} src="https://placehold.co/600x400" alt="" />
          <button onClick={change}>Click</button>
        </div>
  );
};

export default App;  


