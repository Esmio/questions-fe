import React from 'react';
import Question from './Question';

function Selector({title, required, number, answers, onChange}) {
    const _renderOptions = () => answers.map((item, index) => (
      <option
        key={index} 
        value={item.value}
        style={{
          height: '.5rem',
          width: '2rem',
          fontSize: '.28rem',
        }}
      >{item.text}</option>
    ))
    return (
        <Question
            required={required}
            title={title}
            number={number}
        >
          <select
            onChange={onChange(number)}
            style={{
              height: '.5rem',
              width: '2rem',
              fontSize: '.28rem',
            }}
          >
            <option value={0}>请选择</option>
            {_renderOptions()}
          </select>
        </Question>
    )
}

export default Selector;