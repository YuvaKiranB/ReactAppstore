// Write your code here
import './index.css'

const Tab = props => {
  const {tabContent, clickedTab, isActive} = props
  const {displayText, tabId} = tabContent

  const activeStyle = isActive ? 'active' : ''

  const update = () => {
    clickedTab(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`button ${activeStyle}`}
        onClick={update}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tab
