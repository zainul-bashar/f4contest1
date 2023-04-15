import React,{useState} from "react";
function App() {
  
      let [name,setName] = useState("");
      let [email,setEmail] = useState("");
      let [password,setPassword] = useState("");
      let [current,setCurrent] = useState("");
      let [show,setShow] = useState("");
      let [error,setError] = useState("");
      let [paseu,setPaseu] = useState("");
      function showData(e){
       // e.preventDefault();
        let done = "";
        let er = "";
        let cu = "";
        
           if(password!=current){
           cu = "Please Enter Same Password";
        }
         else if(name&&email&&password&&current){
          done = "Form Filled Successfuly";
      }
        else{
           er = "please Fill All The Fields";
        }
        setShow(done);
        setError(er);
        setPaseu(cu);
      }
      
  
  return(
    <div>

      <h1>Sign Up</h1>
      <form>
      <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} required/><br></br>
      <input type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/><br></br>
      <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/><br></br>
      <input type="password" placeholder="current password" value={current} onChange={(e)=>{setCurrent(e.target.value)}} required/><br></br>
      <input type="button" value="submit" onClick={showData}/>
      </form>
      <p>{show}</p>
      <p>{error}</p>
      <p>{paseu}</p>
      
    </div>
    
    
  )
  
}

export default App;
