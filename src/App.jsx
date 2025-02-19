// rsc for react functional component 


const App = () => {
  const city =['Dhaka','London','Delhi','Kolkata']
  return (
    <div>
       <ul>
            {
             city.map((item,i)=>{
              return <li key={i.toString()}>{item}</li>
             })
            }
       </ul>
      
    </div>
  );
};

export default App;