// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavBar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavBar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-container">
          <div className="config-inner-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="input-container">
              <input
                onChange={onChangeContent}
                checked={showContent}
                id="content"
                type="checkbox"
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                onChange={onChangeLeftNavBar}
                checked={showLeftNavbar}
                id="leftNavbar"
                type="checkbox"
              />
              <label className="label" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                onChange={onChangeRightNavBar}
                checked={showRightNavbar}
                id="rightNavbar"
                type="checkbox"
              />
              <label className="label" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
