// rsc for react functional component 


const LoginStatusBtton =(status)=>{
  if(status){
    return <button>Logout</button>
  }else{
    return <button>Login</button>
  }
}

const App = () => {


  return (
    <div>
      <h1>Login status</h1>
      {LoginStatusBtton(false)}
    </div>
  )

};

export default App;