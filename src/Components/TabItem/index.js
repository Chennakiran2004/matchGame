import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const tabButtonClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button className={tabButtonClassName} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
