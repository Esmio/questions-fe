import React, { useState } from 'react';
import Question from './Question';

function PlacePicker({ title, number, onChange, required, hint, places, valueObj }) {
    
    const [prov, setProv] = useState(0);
    const [city, setCity] = useState();
    const [show, setShow] = useState(false);

    const handlePlaceClicked = () => {
        setShow(!show);
        if(!show) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
        }
    }
    const cancle = (e) => {
        setShow(false)
        document.body.style = '';
    }

    const handleModalClicked = (e) => {
        e.stopPropagation();
    }

    const handleCityClicked = (id) => (e) => {
        setCity(id);
        cancle();
        onChange(number)({
            prov,
            city: id,
        })
    }

    const renderOptions = () => {
        return places.map((prov, index) => {
            const { id, name } = prov;
            return <option 
                key={id}
                value={id}
            >{name}</option>
        })
    }

    const renderCities = () => {
        const curProv = places.find((item, index) => item.id === prov);
        const { cities } = curProv;
        return cities.map((city, index) => (
            <div
                key={city.id}
                style={{
                    border: '.01rem solid #19a8ee',
                    padding: '.08rem .2rem',
                    margin: '.05rem .1rem',
                    borderRadius: '.08rem',
                }}
                onClick={handleCityClicked(city.id)}
            >
                {city.name}
            </div>
        ))
    }

    const handleProvChange = (e) => {
        console.log('prov-select', e.target.value);
        const value = parseInt(e.target.value);
        setProv(value);
    }

    return (
        <Question
            title={title}
            number={number}
            required={required}
            hint={hint}
        >
            <div
                style={{
                    display: show ? 'flex' : 'none',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    top: 0,
                    left: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1,
                }}
                onClick={cancle}
            >
                <div
                    style={{
                        width: 'calc(100vw - .6rem)',
                        // height: '50vh',
                        border: '.01rem solid #19a8ee',
                        borderRadius: '.04rem',
                        backgroundColor: '#fff',
                        marginTop: '-20%',
                        position: 'relative',
                        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                    }}
                    onClick={handleModalClicked}
                >
                    <div
                        style={{
                            width: '.4rem',
                            height: '.4rem',
                            borderRadius: '.2rem',
                            position: 'absolute',
                            right: '.1rem',
                            top: '.1rem',
                            background: '#777',
                            boxShadow: '.01rem .01rem .04rem rgba(0, 0, 0, .3)',
                        }}
                        onClick={cancle}
                    >
                        <div
                            style={{
                                width: '.4rem',
                                height: '.01rem',
                                backgroundColor: '#fff',
                                transform: 'rotate(45deg)',
                                position: 'absolute',
                                top: '.2rem',
                            }}
                        ></div>
                        <div
                            style={{
                                width: '.4rem',
                                height: '.01rem',
                                backgroundColor: '#fff',
                                transform: 'rotate(-45deg)',
                                position: 'absolute',
                                top: '.2rem'
                            }}
                        ></div>
                    </div>
                    <div
                        style={{
                            width: 'calc(100vw - .6rem)',
                            height: '1rem',
                            paddingTop: '.5rem',
                            backgroundColor: '#ddd',
                        }}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                style={{
                                    width: '2rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontWeight: 'bolder',
                                }}
                            >
                                选择省份：
                            </div>
                            <select
                                style={{
                                    height: '.5rem',
                                    // width: '2rem',
                                    fontSize: '.28rem',
                                }}
                                onChange={handleProvChange}
                            >
                                {renderOptions()}
                            </select>
                        </div>
                    </div>
                    <div
                        style={{
                            // height: 'calc(50vh - 1.5rem)',
                            boxSizing: 'border-box',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                width: '2rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 'bolder',
                            }}
                        >选择城市：</div>
                        <div
                            style={{
                                height: '100%',
                                flex: 1,
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                padding: '.05rem 0',
                            }}
                        >
                            {renderCities()}
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    minWidth: '2rem',
                    defaultWidth: '50vw',
                    maxWidth: '80vw',
                    height: '.5rem',
                    lineHeight: '.5rem',
                    borderRadius: '.05rem',
                    border: '.01rem solid #19a8ee',
                    boxSizing: 'border-box',
                    paddingLeft: '.1rem',
                }}
                onClick={handlePlaceClicked}
            >
                { prov !== undefined && city !== undefined ? `${places[prov]['name']}，${places[prov]['cities'][city]['name']}` : '' }
            </div>
        </Question>
    )
}

export default PlacePicker;