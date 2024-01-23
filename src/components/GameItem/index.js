import {Image, Button} from './styledComponents'

const GameItem = props => {
  const {choicesDetails, changeImage} = props
  const {id, imageUrl} = choicesDetails

  const changeImages = () => {
    changeImage(id)
  }
  return (
    <Button
      onClick={changeImages}
      type="button"
      data-testid={`${id.toLowerCase()}Button`}
    >
      <Image src={imageUrl} alt={id} />
    </Button>
  )
}
export default GameItem
