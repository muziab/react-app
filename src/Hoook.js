import React, { useEffect, useReducer, useRef, useState,useLayoutEffect } from "react";

function Hoook() {
    // let [no,setNo] = useState(0)

    // let [text,setText] = useState(false)
    const reducer =(state,actions)=>{
        switch (actions.type) {
            case "increase":
                return {no:state.no+1, text:state.text}
            case "toggle":
                return{no:state.no, text : !state.text}
        
            default:
                return state
        }
    }
    let [state,dispatch] = useReducer(reducer,{no:0,text:false})

  let handle = () => {
    console.log(inputRef.current.value);
  };
  let inputRef = useRef(() => {
    console.log("working");
  });
  let increase = ()=>{ 
    dispatch({type:"increase"})
    dispatch({type:"toggle"})
    // setNo(no+1)
    // setText(!text)
  }
  
  useEffect(()=>{
    console.log('Useeffect has loaded');
  },[])
  useLayoutEffect(()=>{
    console.log("uselayout effect has loaded");
  })
  return (
    <div>
          <h1>{state.no}</h1>
          {state.text?<p>This is a text</p> :""}
          <button onClick={increase}>Increase</button>
      hook
      <input type="text" />
      
      <button onClick={handle}>add</button>
    
    </div>
  );
}

export default Hoook;
