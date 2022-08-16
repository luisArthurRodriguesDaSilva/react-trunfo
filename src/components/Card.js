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
      ? <img 
          src='https://ajuda.growgames.com.br/attachments/token/EzaE2p10cvOcRwmxq9RJ9c1MP/?name=super_trunfo.png' 
          id="trunfo-alert" 
          data-testid="trunfo-card" 
          alt='trunfo'
          />
      : '';

    return (
      <div
      className={ className }>
        <div>
          <div className="imageContainer">
            {(cardImage !== '') 
            && <img
                data-testid="image-card"
                id="img-card"
                src={ cardImage }
                alt={ cardName }
              />}

              {st}
          </div>
          <h3 className="name-card" data-testid="name-card">{cardName}</h3>
          <h4 data-testid="rare-card">{cardRare}</h4>
          <p data-testid="description-card">{cardDescription}</p>
          <div className='attr-container'>
            <p>Força: </p>
            <h4
              style={ 
                      {
                        width: cardAttr1 + '%',
                        backgroundColor: ' rgb(196, 107, 66)',
                      } 
                    } 
              id="" 
              data-testid="attr1-card">{cardAttr1}</h4></div>
          <div className='attr-container'>
            <p>Agilidade:</p>
            <h4 
              style={ 
                      { 
                        width: cardAttr2 + '%',
                        backgroundColor: ' rgb(66, 135, 196)',
                      } 
                    }
              id="" 
              data-testid="attr2-card">{cardAttr2}</h4></div>
          <div className='attr-container'>
            <p>sla: </p>
            <h4 
              style={ 
                      {
                         width: cardAttr3 + '%',
                          backgroundColor: 'rgb(222, 224, 85)',
                      } 
                    } 
              id="" 
              data-testid="attr3-card">{cardAttr3}</h4></div>
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
