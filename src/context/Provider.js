import PropTypes from 'prop-types';
import React, { Component } from 'react';
import carsContext from './carsContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({...this.state, [car]: side });
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };
    const { children } = this.props;
    return (
      <carsContext.Provider value={context}>
        {children}
      </carsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
