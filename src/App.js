import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import FilterName from './components/FilterName';
import FilterRare from './components/FilterRare';
import FilterTrunfo from './components/FilterTrunfo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showedCards: [],
      savedCards: JSON.parse(localStorage.getItem('save_cards') || '[]'),
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      buscado: '',
      rareBuscada: 'todas',
      trunfoFilterMode: false,
    };
  }

  saveCard = ({
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  }) => {
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((ps) => ({
      savedCards: [...ps.savedCards, card],
    }),()=>{
      const stringfado = JSON.stringify(this.state.savedCards);
    localStorage.setItem('save_cards',stringfado)
  });
  }

  haveTrunfo = (savedCards) => (
    savedCards.some((card) => (card.cardTrunfo))
  );

  onSaveButtonClick= () => {
    this.saveCard(this.state);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  onInputChange=({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  getBiggestAtt=(cardAttr1, cardAttr2, cardAttr3) => {
    const [c1, c2, c3] = [
      parseInt(cardAttr1, 10),
      parseInt(cardAttr2, 10),
      parseInt(cardAttr3, 10)];
    if (c1 > c2 && c1 > c3) return c1;
    if (c2 > c3) return c2;
    return c3;
  }

  abletor = () => { // wayne me mostrou o tamanho da minha burrice através dessa
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const [c1, c2, c3] = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];

    const sum = c1 + c2 + c3;
    const maxS = 333;
    const maxB = 111;

    return (cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || (sum > maxS)
      || ([c1, c2, c3].find((el) => el < 0))
      || (this.getBiggestAtt(c1, c2, c3) > maxB));
  }

  deletCard = (cardName) => {
    this.setState((ps) => ({
      savedCards: ps.savedCards.filter((carde) => (carde.cardName !== cardName)),
    }),()=>{
      const stringfado = JSON.stringify(this.state.savedCards);
    localStorage.setItem('save_cards',stringfado)
  });
  }

  LasSavasShowadas = () => {
    const { savedCards, buscado, rareBuscada, trunfoFilterMode } = this.state;

    let showadas = savedCards.filter((card) => (card.cardName.includes(buscado)));

    if (rareBuscada !== 'todas') {
      showadas = showadas.filter(
        (card) => (card.cardRare === rareBuscada),
      );
    }

    if (trunfoFilterMode === true) {
      showadas = savedCards.filter((card) => (card.cardTrunfo === true));
    }

    return showadas.map((e) => (
      <div key={ e.cardName } className="lasSavas">
        <Card
          key={ e.cardName }
          className="lasSavasCima"
          cardName={ e.cardName }
          cardDescription={ e.cardDescription }
          cardAttr1={ e.cardAttr1 }
          cardAttr2={ e.cardAttr2 }
          cardAttr3={ e.cardAttr3 }
          cardImage={ e.cardImage }
          cardRare={ e.cardRare }
          cardTrunfo={ e.cardTrunfo }
        />
        <button
          type="button"
          data-testid="delete-button"
          className='rmBtn'
          onClick={ () => this.deletCard(e.cardName) }
        >
          Excluir
        </button>
      </div>));
  }

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
      savedCards,
      buscado,
      rareBuscada,
      trunfoFilterMode,
    } = this.state;

    const jaFoi = this.haveTrunfo(savedCards);
    return (
      <div>
        <h1>Your Trunfo</h1>
        <div className="tope">
          <Form
            cardName={ cardName }
            jaFoi={ jaFoi }
            cardTrunfo={ cardTrunfo }
            cardDescription={ cardDescription }
            cardAttr1={ parseInt(cardAttr1%101,10) }
            cardAttr2={ parseInt(cardAttr2%101,10)  }
            cardAttr3={ parseInt(cardAttr3%101,10)  }
            cardImage={ cardImage }
            cardRare={ cardRare }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ this.abletor() }
          />
          <Card
            className="mainCardContainer"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ parseInt(cardAttr1%101,10) }
            cardAttr2={ parseInt(cardAttr2%101,10) }
            cardAttr3={ parseInt(cardAttr3%101,10) }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div className="boxDelLasSavas">
          <div id="filters">
          <FilterName
            buscado={ buscado }
            onInputChange={ this.onInputChange }
            trunfoFilterMode={ trunfoFilterMode }
          />
          <FilterRare
            trunfoFilterMode={ trunfoFilterMode }
            onInputChange={ this.onInputChange }
            rareBuscada={ rareBuscada }
          />
          <FilterTrunfo
            trunfoFilterMode={ trunfoFilterMode }
            onInputChange={ this.onInputChange }
          />
          </div>
          <div id='savedCardsContainer'>{this.LasSavasShowadas()}</div>
        </div>
      </div>
    );
  }
}

export default App;
