import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CarsContext from './carsContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  changeSignal(color) {
    this.setState({
      signal: {
        ...this.state.signal,
        color,
      }
    });
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    const { children } = this.props;

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;