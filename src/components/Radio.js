import React from 'react';

function Radio({text, value, selected, isOther, onChange, handleOtherValueChange}) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          lineHeight: '.36rem',
          minHeight: '.5rem',
        }}
        onClick={onChange(value)}
      >
        <div
          style={{
            height: '.3rem',
            width: '.3rem',
            borderRadius: '.15rem',
            border: '.01rem solid #ddd',
            backgroundColor: selected ? '#19a8ee' : '',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '.12rem',
              height: '.12rem',
              borderRadius: '.06rem',
              backgroundColor: selected ? '#fff' : '',
            }}        
          >
          </div>
        </div>
        <div
          style={{
            paddingLeft: '.1rem',
          }}
        >{text}</div>
        {
          isOther ? 
          <div
            style={{
              width: '3rem',
              height: '.37rem',
              marginLeft: '.2rem',
              borderBottom: '.01rem solid #ddd',
            }}
          >
            <input 
              style={{
                border: 'none',
                outline: 'none',
                height: '.36rem',
                width: '3rem',
                fontSize: '.3rem',
                padding: '0 .1rem',              
              }}
              type="text"
              onChange={(e) => {
                handleOtherValueChange(e);
              }}
            />
          </div> : ''
        }
      </div>
    )
}

export default Radio;