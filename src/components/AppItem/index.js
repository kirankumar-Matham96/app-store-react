import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item-container">
      <img src={imageUrl} alt={appName} className="app-item-img" />
      <p className="app-item-description">{appName}</p>
    </li>
  )
}

export default AppItem
