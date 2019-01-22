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
        valueObj,
        hint,
        verify,
    }) {
    options = options || [];
    const isEmpty = !valueObj || !valueObj.value || valueObj.value.length === 0;
    let hintText = hint || '答案不能为空';
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
            hint={hintText}
            showHint={isEmpty && verify}
        >
            {_renderOptions()}
        </Question>
    )
}

export default MultiSelector;