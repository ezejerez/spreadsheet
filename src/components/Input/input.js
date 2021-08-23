import { React, useState } from 'react';
import './input.css';

export default function Input() {
  const [inputValue, setInputValue] = useState('');

  function splitIntoNumbers(value) {
    return value.split(/\+|-/g).map((n) => parseFloat(n));
  }

  function splitIntoOperators(value) {
    return value.split(/(?!\+$)(?!-$)[0-9]+/g).filter((x) => x);
  }

  function keyPress(e) {
    if (e.keyCode === 13) {
      const numbers = splitIntoNumbers(e.target.value);
      const operators = splitIntoOperators(e.target.value);

      let result = numbers[0];
      numbers.forEach((n, i) => {
        const count = operators[i - 1];

        // eslint-disable-next-line default-case
        switch (count) {
          case '+': {
            result += n;
            break;
          }
          case '-': {
            result -= n;
            break;
          }
        }
      });

      setInputValue(result);
    }
  }

  return (
    <input
      onKeyDown={keyPress}
      onChange={(event) => setInputValue(event.target.value)}
      value={inputValue}
    />
  );
}
