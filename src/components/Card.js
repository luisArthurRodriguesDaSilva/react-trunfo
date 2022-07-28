import React, { Component } from 'react';
import propTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      className,
    } = this.props;

    const st = (cardTrunfo)
      ? <h2 data-testid="trunfo-card">Super Trunfo</h2>
      : '';

    return (
      <div className={ className }>
        <div>
          <div className="imageContainer">
            <img
              data-testid="image-card"
              id="img-card"
              src={ cardImage }
              alt={ cardName }
            />
          </div>
          <h2 data-testid="name-card">{cardName}</h2>
          <h4 data-testid="rare-card">{cardRare}</h4>
          <p data-testid="description-card">{cardDescription}</p>
          <h4 data-testid="attr1-card">{cardAttr1}</h4>
          <h4 data-testid="attr2-card">{cardAttr2}</h4>
          <h4 data-testid="attr3-card">{cardAttr3}</h4>
          {st}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
