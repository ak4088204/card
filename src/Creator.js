import React, { useState } from "react";
import './Creator.css';

function Creator(){

    const[arr,setarr]=useState([])
    const [value,setvalue]=useState({name:"",mail:"",number:"",image:""})
    
    const changehandle=(e)=>{
        setvalue({...value,[e.target.name]:e.target.value}) 
        
         
    }

    let {name,mail,number,image} = value;

    function click(e){
        e.preventDefault();
        setarr([...arr,{name,mail,number,image}]);

    }

   

    function deletes(i){
        arr.splice(i,1);
        setarr([...arr]);
    }
   

    return(
        <div>
            <h1>Card Creator</h1>
            <form>
            <h5>Please enter your name</h5>
            <input type="text" name='name' value={value.name} onChange={changehandle}/><br/>
            <h5>Please enter your email</h5>
            <input type="text" name='mail' value={value.mail} onChange={changehandle} /><br/>
            <h5>Enter your contact number</h5>
            <input type="text" name='number' value={value.number} onChange={changehandle}/><br/>
            <h5>Paste your profile picture URL</h5>
            <input type="text" name="image" value={value.image} onChange={changehandle}/><br/><br/>
            <button onClick={click}>Create card</button>
            </form>
            <div>
            {
                arr.map((element,key)=>{
                    return(
                        <div key={key} className="card">
                           <b>Name:</b> {element.name}<br></br>
                           <b>Mail:</b> {element.mail}<br></br>
                           <b>Number:</b> {element.number}<br></br>
                           <b>Image:</b><br></br><img src ={element.image} alt="passportpic"/>
                           <button onClick={()=>deletes(key)} className="delete">Delete</button>
                        </div>
                    );
                })
            }
            
            </div>

        </div>
    );
}

export default Creator;