import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImage} = props
  const {thumbnailUrl} = imageDetails

  const onClick = () => {
    onClickImage(thumbnailUrl)
  }

  return (
    <li className="image-item-container">
      <button className="button" type="button" onClick={onClick}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
