
import './App.css';
import { useState } from "react";


function App() {
   const [input,setInput]=useState("");
   const [data, setData]=useState([]);
   const [isChecked,setisChecked]=useState(false)

   const deleteIcon = (id) => {
    console.log({id});
    setData((data) => {
      return data.filter((elem,i) =>{
        return i !==id;
      })
    });
   };


  return (
    <div>
      <form class="form" onsubmit ={(e)=>{e.preventDefault()}}>
      <input  type="text" value={input} onChange={(e) => { setInput(e.target.value)}} />
      <button type="Btn" onClick={() => {
        const newData = [...data, input];
        setData(newData);
        setInput('');
        console.log(newData);
      }}>submit</button>
      </form>

      <input id="checkbox" type="checkbox" onChange={() => {
        setisChecked(!isChecked)}} checked={isChecked}/>
        <label htmlFor="checkbox">List</label>


       
        {isChecked ? (
        <ol>
          { data.length > 0 && data.map((elem,id) => {
          return ( <li key={id}>
              <span>{elem}</span>
              <span className="delete" onClick={() => deleteIcon(id)}>❌</span>
              </li>);
          })} </ol> 
          ) :(   
            <div>
              {data.length > 0 && data.map((elem,id) => {
                return(<div className="card" key={id}><span>{elem}</span>
                
                <span className="delet" onClick={() => deleteIcon(id)}>❌</span>
                </div>);
              })}
            </div>
          )}
        </div>  
        )  
      
}
export default App;

  
      

      

      
        
      

      
    
    


  
    
