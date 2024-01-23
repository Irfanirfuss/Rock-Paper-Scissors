import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const ScoreContainer = styled.div`
  border: 2px solid #ffffff;
  padding: 10px;

  display: flex;
  width: 60%;
  border-radius: 5px;
  justify-content: space-between;
  margin-top: 20px;
`

export const NameContainer = styled.div`
  padding: 5px;

  background-color: ${props => (props.outline ? '#ffffff' : '#223a5f')};
  border-radius: 10px;
  width: 120px;
  text-align: center;
`
export const Names = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
`
export const P = styled.p`
  color: orange;
  padding: 5px;
  font-family: 'Roboto';
`
export const GameContainer = styled.div`
  padding: 5px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  @media screen and (max-width: 760px) {
    width: 40%;
  }
`
export const ImageContainer = styled.div`
  margin: 2px;
  padding: 2px;
`

export const Image = styled.img`
  width: 120px;
  height: 120px;
  @media screen and (max-width: 760px) {
    height: 50px;
    width: 50px;
  }
`

export const Button = styled.button`
  background-color: #ffffff;
  padding: 5px;
  border-radius: 6px;
  border: none;
  color: red;
  font-size: 17px;
`
export const Rule = styled.button`
  text-align: right;
  display: flex;
  padding: 12px;
  justify-content: flex-end;
  align-items: flex-end;
  color: green;
`
export const Pop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
`
export const RuleImage = styled.img`
  width: 60%;
  text-align: center;
`
export const Rules = styled.button`
  text-align: right;
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: flex-end;
  width: 70%;
`
export const Rule1 = styled.button`
  text-align: right;
  display: flex;
  padding: 12px;
  justify-content: flex-end;
  align-items: flex-end;
  width: 70%;
`
export const P1 = styled.p`
  color: orange;
  padding: 5px;
  font-family: 'Roboto';
`
export const Span = styled.span`
  color: #ffffff;
`
export const Span1 = styled.span`
  color: pink;
`
export const Span3 = styled.span`
  color: yellow;
`
