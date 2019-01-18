import React from 'react';
import Question from './Question';
import Option from './Option';

function MultiSelector({
        required, 
        number, 
        title, 
        multi, 
        onChange, 
        options, 
        otherValue, 
        handleOtherValueChange, 
        valueObj
    }) {
    const _renderOptions = () => options.map((item, index) => (
        <Option
          key={index}
          selected={!!valueObj && valueObj.value && valueObj.value.indexOf(item.value) > -1}
          text={item.text}
          value={item.value}
          onChange={onChange(number, multi)}
          isOther={!!otherValue && otherValue === item.value}
          handleOtherValueChange={!!handleOtherValueChange ? handleOtherValueChange(number) : null}
        />
    ))
    return (
        <Question
            required={required}
            number={number}
            title={title}
            multi={multi}
        >
            {_renderOptions()}
        </Question>
    )
}

export default MultiSelector;