

  const App = () =>{
    
    const PostFormData= (event)=>{
      event.preventDefault();
      alert('Form Submitted')
    }
  
  return(
        <div>
          <form onSubmit={PostFormData}>
            <input placeholder="name" />
            <button type="submit">Submit</button>
          </form>
        </div>
  );
};

export default App;  


