import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import GameItem from '../GameItem'
import {
  MainContainer,
  ScoreContainer,
  Names,
  NameContainer,
  P,
  GameContainer,
  ImageContainer,
  Image,
  Rule,
  Pop,
  RuleImage,
  Rules,
  Rule1,
  P1,
  Button,
  Span,
  Span1,
  Span3,
} from './styledComponents'

class Game extends Component {
  state = {
    isDisplay: true,
    selectedImg: null,
    score: 0,
    randomImg: null,

    messages: '',
  }

  changeImage = id => {
    const {choicesList} = this.props

    const img = choicesList.find(each => each.id === id)
    const random = Math.floor(Math.random() * choicesList.length)
    const randomImage = choicesList[random]
    let message
    if (id === 'ROCK') {
      if (randomImage.id === 'SCISSORS') {
        message = 'YOU WON'
        this.setState(prevState => ({score: prevState.score + 1}))
      } else if (randomImage.id === 'PAPER') {
        message = 'YOU LOSE'
        this.setState(prevState => ({score: prevState.score - 1}))
      } else {
        message = 'IT IS DRAW'
        this.setState(prevState => ({score: prevState.score}))
      }
    } else if (id === 'PAPER') {
      if (randomImage.id === 'SCISSORS') {
        message = 'YOU LOSE'
        this.setState(prevState => ({score: prevState.score - 1}))
      } else if (randomImage.id === 'ROCK') {
        message = 'YOU WON'
        this.setState(prevState => ({score: prevState.score + 1}))
      } else {
        message = 'IT IS DRAW'
        this.setState(prevState => ({score: prevState.score}))
      }
    } else if (id === 'SCISSORS') {
      if (randomImage.id === 'ROCK') {
        message = 'YOU LOSE'
        this.setState(prevState => ({score: prevState.score - 1}))
      } else if (randomImage.id === 'PAPER') {
        message = 'YOU WON'
        this.setState(prevState => ({score: prevState.score + 1}))
      } else {
        message = 'IT IS DRAW'
        this.setState(prevState => ({score: prevState.score}))
      }
    }

    this.setState({
      selectedImg: img,
      isDisplay: false,
      randomImg: randomImage,

      messages: message,
    })
  }

  /*  wonMessage = () => {
    const {randomImg, selectedId} = this.state

    let message
    if (selectedId === 'ROCK') {
      if (randomImg.id === 'SCISSORS') {
        message = 'YOU WON'
      } else if (randomImg.id === 'PAPER') {
        message = 'YOU LOSE'
      } else {
        message = 'IT IS DRAW'
      }
    } else if (selectedId === 'PAPER') {
      if (randomImg.id === 'SCISSORS') {
        message = 'YOU LOSE'
      } else if (randomImg.id === 'ROCK') {
        message = 'YOU WON'
      } else {
        message = 'IT IS DRAW'
      }
    } else if (selectedId === 'SCISSORS') {
      if (randomImg.id === 'ROCK') {
        message = 'YOU LOSE'
      } else if (randomImg.id === 'PAPER') {
        message = 'YOU WON'
      } else {
        message = 'IT IS DRAW'
      }
    }

    return message
  } */

  playAgain = () => {
    this.setState({isDisplay: true})
  }

  render() {
    const {choicesList} = this.props
    const {isDisplay, selectedImg, score, randomImg, messages} = this.state

    console.log(messages)

    return (
      <>
        <MainContainer>
          <ScoreContainer>
            <NameContainer>
              <Names>
                <Span> Rock</Span> <br />
                <Span1>Paper</Span1> <br />
                <Span3>Scissors</Span3>
              </Names>
            </NameContainer>
            <NameContainer outline>
              <P>Score</P>
              <P>{score}</P>
            </NameContainer>
          </ScoreContainer>
          {isDisplay && (
            <GameContainer>
              <ImageContainer>
                {choicesList.map(each => (
                  <GameItem
                    key={each.id}
                    choicesDetails={each}
                    changeImage={this.changeImage}
                  />
                ))}
              </ImageContainer>
            </GameContainer>
          )}
          {!isDisplay && (
            <>
              <GameContainer>
                <ImageContainer>
                  <P1>You</P1>
                  <Image src={selectedImg.imageUrl} alt="your choice" />
                </ImageContainer>
                <ImageContainer>
                  <P1>Opponent</P1>
                  <Image src={randomImg.imageUrl} alt="opponent choice" />
                </ImageContainer>
              </GameContainer>
              <ImageContainer>
                <P1> {messages}</P1>
                <Button type="button" onClick={this.playAgain}>
                  PLAY AGAIN
                </Button>
              </ImageContainer>
            </>
          )}

          <Pop className="popup-container">
            <Popup
              modal
              trigger={
                <Rule type="button" className="trigger-button">
                  Rules
                </Rule>
              }
            >
              {close => (
                <>
                  <Rule1
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </Rule1>
                  <Rules>
                    <RuleImage
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </Rules>
                </>
              )}
            </Popup>
          </Pop>
        </MainContainer>
      </>
    )
  }
}

export default Game
