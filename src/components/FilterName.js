import React, { Component } from 'react';
import propTypes from 'prop-types';

class FilterName extends Component {
  render() {
    const { buscado, onInputChange, trunfoFilterMode } = this.props;
    return (
      <input
        disabled={ trunfoFilterMode }
        type="text"
        data-testid="name-filter"
        name="buscado"
        value={ buscado }
        onChange={ onInputChange }
      />
    );
  }
}

FilterName.propTypes = {
  trunfoFilterMode: propTypes.bool.isRequired,
  buscado: propTypes.string.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default FilterName;
