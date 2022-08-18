import React, { Component } from 'react';
import propTypes from 'prop-types';

class FilterRare extends Component {
  render() {
    const { rareBuscada, onInputChange, trunfoFilterMode } = this.props;
    return (
      <label htmlFor="rare-filter">
        <span id="rareFilterText">raridade: </span>
      <select
        disabled={ trunfoFilterMode }
        id="rare-filter"
        data-testid="rare-filter"
        className="arredondar"
        name="rareBuscada"
        value={ rareBuscada }
        onChange={ onInputChange }
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>

      </select>
      </label>
    );
  }
}

FilterRare.propTypes = {
  trunfoFilterMode: propTypes.bool.isRequired,
  rareBuscada: propTypes.string.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default FilterRare;
