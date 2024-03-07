// Write your code here

import './index.css'

const Card = props => {
  const {cardInfo} = props

  const {appName, imageUrl} = cardInfo

  return (
    <li className="li2">
      <img className="image2" src={imageUrl} alt={appName} />
      <p className="p1">{appName}</p>
    </li>
  )
}

export default Card
