// Write your code here
import Header from '../Header'
import Body from '../Body'
import './index.css'
import Footer from '../Footer'

const Layout = () => (
  <div className="layout-container">
    <div className="layout-inner-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
