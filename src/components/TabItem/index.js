import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateStateOnTabChange} = props

  const {displayText, tabId} = tabDetails

  const onTabChange = () => {
    updateStateOnTabChange(tabId)
  }

  return (
    <li className={`tab-item-container ${isActive ? 'blue-style' : ''}`}>
      <button type="button" className="tab-button" onClick={onTabChange}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
