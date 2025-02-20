import { useRef } from "react";


  const App = () =>{
    
    let firstName,lastName=useRef();
  const change =()=>{
    // let fname = firstName.current.value;
    // let lname = lastName.current.value;
    let fname = firstName.value;
    let lname = lastName.value;

    alert (fname +" " +lname);
  

  }

  return(
        <div>

          {/* not working */}
          {/* <input ref={firstName} placeholder="First Name" /><br></br>
          <input ref={lastName} placeholder="Last Name" /> */}


          <input ref={(a)=>firstName=a} placeholder="First Name" /><br></br>
          <input ref={(b)=>lastName=b} placeholder="Last Name" />
          <button onClick={change}>Click</button>
        </div>
  );
};

export default App;  


