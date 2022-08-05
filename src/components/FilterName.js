import React, { Component } from 'react';
import propTypes from 'prop-types';

class FilterName extends Component {
  render() {
    const { buscado, onInputChange, trunfoFilterMode } = this.props;
    return (
    <>
      <label htmlFor='nameFilter>'>
        <input
          disabled={ trunfoFilterMode }
          placeholder="Buscar por ..."
          id="nameFilter"
          type="text"
          data-testid="name-filter"
          name="buscado"
          value={ buscado }
          onChange={ onInputChange }
        />
      </label>
    </>
    );
  }
}

FilterName.propTypes = {
  trunfoFilterMode: propTypes.bool.isRequired,
  buscado: propTypes.string.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default FilterName;
