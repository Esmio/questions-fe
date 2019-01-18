import React from 'react';
import Radio from './Radio';

function Choice({title, required, number, answers, onChange, otherValue, handleOtherValueChange, valueObj}) {
    const _renderOptions = () => answers.map((item, index) => (
      <Radio
        key={index}
        selected={!!valueObj && valueObj.value === item.value}
        text={item.text}
        value={item.value}
        onChange={onChange(number)}
        isOther={!!otherValue && otherValue === item.value}
        handleOtherValueChange={!!handleOtherValueChange ? handleOtherValueChange(number) : null}
      />
    ))
    return (
      <div
        style={{
          width: 'calc(100vw - .6rem)',
          padding: '.3rem 0',
          borderBottom: '.01rem solid #f2f2f2',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            fontWeight: 'border',
            lineHeight: '.36rem',
          }}
        >
          <span
            style={{
              width: '.2rem',
              textAlign: 'center',
              color: 'red',
            }}
          >
            { required ? '*' : '' }
          </span>
          <span
            style={{
              width: '.4rem',
            }}
          >
            { !!number ? `${number}.` : '' }
          </span>
          <span>
            {title}
          </span>
        </div>
        <div
          style={{
            paddingLeft: '.6rem',
            paddingTop: '.2rem',
          }}
        >
          {_renderOptions()}
        </div>
      </div>
    )
}

export default Choice;