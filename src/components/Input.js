import React from 'react';
import Question from './Question';

function Input({ required, number, title, onChange, hint, textarea }) {
    return (
        <Question
            required={required}
            number={number}
            title={title}
            hint={hint}
        >
            {
                textarea ? 
                <textarea
                    rows={3}
                    style={{
                        padding: '.1rem',
                        boxSizing: 'border-box',
                        border: '1px solid #19a8ee',
                        borderRadius: '.05rem',
                        width: '80vw',
                        fontSize: '.24rem',
                        lineHeight: '.24rem',
                        textAlign: 'justify',
                    }}
                    onChange={onChange(number)}
                >
                </textarea> : 
                <div
                    style={{
                        border: '1px solid #19a8ee',
                        height: '.5rem',
                        borderRadius: '.05rem',
                        width: '80vw',
                        boxSizing: 'border-box',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <input 
                        style={{
                            width: '78vw',
                            height: '.46rem',
                            fontSize: '.28rem',
                            border: 'none',
                            outline: 'none',
                            margin: 0,
                            padding: 0,
                        }}
                        type="text"
                        onChange={onChange(number)}
                    />
                </div>
            }
            
        </Question>
    )
}

export default Input;