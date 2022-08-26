import React, { Component } from 'react';
import propTypes from 'prop-types';

class FilterTrunfo extends Component {
  render() {
    const { trunfoFilterMode, onInputChange } = this.props;
    return (
      <label id="trufo-filter-container" htmlFor="onlyTrunfo">
        <input
        type="checkbox"
        id="onlyTrunfo"
        data-testid="trunfo-filter"
        name="trunfoFilterMode"
        checked={ trunfoFilterMode }          value={ trunfoFilterMode }
          onChange={ onInputChange }
          onClick={ onInputChange }
        />
        <span id="trunfoFilterText">somente o trunfo</span>
        
      </label>
      
    );
  }
}

FilterTrunfo.propTypes = {
  trunfoFilterMode: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default FilterTrunfo;
