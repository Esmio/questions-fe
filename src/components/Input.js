import React from 'react';
import Question from './Question';

function Input({ required, number, title, onChange, show, hint, textarea, valueObj, verify }) {
    if(!show) return '';
    const isEmpty = !valueObj || !valueObj.value
    let hintText = hint || '答案不能为空';
    return (
        <Question
            required={required}
            number={number}
            title={title}
            hint={hintText}
            showHint={isEmpty && verify}
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