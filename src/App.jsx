

// immdeitely invock condictional rangering 

const App = () => {

  let status = false;

  return(
        <div>
            <h1>Login Status</h1>
          {(()=>{
            if(status ==true){
                  return <button>Logout</button>
                  }else{
                  return <button>Login</button>
                  }
          })()}
        </div>
  )

};

export default App;  