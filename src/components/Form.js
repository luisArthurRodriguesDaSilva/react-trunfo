import React, { Component } from 'react';
import propTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      jaFoi,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      cardTrunfo,
    } = this.props;

    const ine = (jaFoi)
      ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
      : (
        <label htmlFor='cardTrunfoCheckbox'>
          trunfo:
        <input
          id="cardTrunfoCheckbox"
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          checked={ cardTrunfo }
          value={ cardTrunfo }
          onChange={ onInputChange }
          onClick={ onInputChange }
        />
        </label>
        );
    return (
      <form className="forme">
        <label htmlFor='cardName'>
          nome:
          <br />
        <input
          type="text"
          data-testid="name-input"
          id='cardName'
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          onClick={ onInputChange }
        />
        </label>

        <label htmlFor='cardDescription'>
          descrição:
          <br />
        <textarea
          data-testid="description-input"
          id='cardDescription'
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          onClick={ onInputChange }
        />
        </label>

        <label htmlFor='cardAttr1Inp'>
          Força:
          <br />
        <input
          id='cardAttr1Inp'
          type="number"
          data-testid="attr1-input"
          name="cardAttr1"
          value={ cardAttr1 }
          onClick={ onInputChange }
          onChange={ onInputChange }
        />
        </label>

        <label htmlFor='cardAttr2Inp'>
          Agilidade:
          <br />
        <input
          id='cardAttr2Inp'
          type="number"
          data-testid="attr2-input"
          name="cardAttr2"
          value={ cardAttr2 }
          onClick={ onInputChange }
          onChange={ onInputChange }
        />
        </label>
        
        <label htmlFor='cardAttr3Inp'>
          Força:
          <br />
        <input
          id='cardAttr3Inp'
          type="number"
          data-testid="attr3-input"
          name="cardAttr3"
          value={ cardAttr3 }
          onClick={ onInputChange }
          onChange={ onInputChange }
        />
        </label>

        {ine}
      <label htmlFor='imgInp'>
        imagem:
        <input
          id='imgInp'
          type="text"
          data-testid="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          onClick={ onInputChange }
        />
        </label>
        

        <select
          type="checkbox"
          data-testid="rare-input"
          name="cardRare"
          onChange={ onInputChange }
          onClick={ onInputChange }
          value={ cardRare }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  jaFoi: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
