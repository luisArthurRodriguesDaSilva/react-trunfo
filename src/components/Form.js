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
      ? ( <p id='trunfo-confirmed'>Você já tem um Super Trunfo em seu baralho</p>)
      : (
        <label htmlFor='cardTrunfoCheckbox' className='container'>
          trunfo:
          <br />
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
        <span className='checkmark'></span>
        </label>
        );
    return (
      <form className="forme">
        <div className='top-form'>
          <label htmlFor='cardName' >
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
        </div>
        <div id='bottom-form'>
          <div className='left-bottom-form'>
            <label htmlFor='cardAttr1Inp'>
              Força:
              <br />
            <input
              id='cardAttr1Inp'
              min = '0'
              max = '100'
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
              min = '0'
              max = '100'
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onClick={ onInputChange }
              onChange={ onInputChange }
            />
            </label>

            <label htmlFor='cardAttr3Inp'>
              Loucura
              <br />
            <input
              id='cardAttr3Inp'
              min = '0'
              max = '100'
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onClick={ onInputChange }
              onChange={ onInputChange }
            />
            </label>

            <label htmlFor='rarity-input'>
              raridade:
              <br />
              <select
                id='rarity-input'
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
            </label>

          </div>
          {ine}
          <div className='right-bottom-form'>
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

            <button
              id='save-button'
              type="button"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              salvar carta
            </button>
          </div>
        </div>
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
