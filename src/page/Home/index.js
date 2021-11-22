import Home from "../../component/home/home";
import Header from "../../component/header/header"
import "./index.css"

function HomePage () {
  return (
    <div className="wrapperHome">
      <div className="header">
        <Header />
      </div>
      <div className="homepage">
        <Home />
      </div>
    </div>
  )
}
export default HomePage