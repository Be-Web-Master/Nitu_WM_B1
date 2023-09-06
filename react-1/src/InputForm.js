import {useState} from "react";
 
  const InputForm = (props) => {
    let { rcCount , children } = props
    const [inputValue, setInputValue] = useState('')

    console.log("3",{inputValue, children});
    return <form>
      <div>Count In Form: {rcCount}</div>
      {children}
      <input type="text"
       onChange={(e) => {
        setInputValue(e.target.value);
        // console.log({val: e.target.value})
      }}
      value = {inputValue}
      />
      <div>{inputValue}</div>
      <input type='submit'/>
    </form>
  }

  export {InputForm};