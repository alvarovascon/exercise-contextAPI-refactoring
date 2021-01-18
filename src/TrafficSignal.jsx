// src/TrafficSignal.jsx

import React from 'react';
import carsContext from './context/carsContext';

function TrafficSignal(){
  return (
    <carsContext.Consumer>
      { ({ changeSignal, renderSignal, signal: { color } }) => (
        <div>
          <div className="button-container">
            <button onClick={() => changeSignal('red')} type="button">
              Red
            </button>
            <button onClick={() => changeSignal('yellow')} type="button">
              Yellow
            </button>
            <button onClick={() => changeSignal('green')} type="button">
              Green
            </button>
          </div>
          <img className="signal" src={renderSignal(color)} alt="" />
        </div>)
      }
    </carsContext.Consumer>
  );
};

export default TrafficSignal;
