// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const itemsList = [
  {
    id: 1,
    value: 'Item 1',
  },
  {
    id: 2,
    value: 'Item 2',
  },
  {
    id: 3,
    value: 'Item 3',
  },
  {
    id: 4,
    value: 'Item 4',
  },
]

const Body = () => {
  const renderLeftNavBar = () => (
    <div className="navbar-container">
      <div className="nav-bar-inner-container">
        <h1 className="body-heading">Left Navbar Menu</h1>
        <ul className="list-item-container">
          {itemsList.map(eachItem => (
            <li key={eachItem.id}>
              <p className="item">{eachItem.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  const renderContent = () => (
    <div className="content-container">
      <div className="content-inner-container">
        <h1 className="body-heading">Content</h1>
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
    </div>
  )

  const renderRightNavBar = () => (
    <div className="navbar-container">
      <div className="nav-bar-inner-container">
        <h1 className="body-heading">Right Navbar</h1>
        <div className="ad-container">
          <div className="each-ad-container">
            <p>Ad 1</p>
          </div>
          <div className="each-ad-container">
            <p>Ad 2</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-container">
            {showLeftNavbar && renderLeftNavBar()}
            {showContent && renderContent()}
            {showRightNavbar && renderRightNavBar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
