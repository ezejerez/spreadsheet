import {React, useState} from 'react';
import './input.css';

export default function Input() {

  const [inputValue, setInputValue] = useState('')

  function inputResult(){
    return 
  }

  function keyPress(e) {
    if (e.keyCode === 13){
       console.log('value', e.target.value);
       // put the login here
    }
 }

  return <input onKeyDown={keyPress} onChange={event => setInputValue(event.target.value)}/>;
}
