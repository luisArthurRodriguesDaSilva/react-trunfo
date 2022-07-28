import React, { Component } from 'react';
import propTypes from 'prop-types';

class FilterTrunfo extends Component {
  render() {
    const { trunfoFilterMode, onInputChange } = this.props;
    return (
      <input
        type="checkbox"
        data-testid="trunfo-filter"
        name="trunfoFilterMode"
        checked={ trunfoFilterMode }
        value={ trunfoFilterMode }
        onChange={ onInputChange }
        onClick={ onInputChange }
      />
    );
  }
}

FilterTrunfo.propTypes = {
  trunfoFilterMode: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default FilterTrunfo;
