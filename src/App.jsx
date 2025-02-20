

  const App = () =>{
    
    // regular function 
    function Demo(){
      alert("clicked")
    }
    // arrow function 
    const Demo1=()=>{
      alert("clicked")
    }
  return(
        <div>
          {/* alert function working when load . is is unwanted  */}
          {/* <button onClick={alert("clicked")}>Submit</button> */}

          {/* click the alert using arrow function */}
          {/* <button onClick={()=>{alert("clicked")}}>Submit</button> */}

          {/* click the alert using  function */}
          {/* <button onClick={
            function Demo(){
              alert("clicked")
            }
          }>Submit</button> */}

          {/* click the alert using predefind function */}
          <button onClick={Demo1}>Submit</button>
        </div>
  );
};

export default App;  


