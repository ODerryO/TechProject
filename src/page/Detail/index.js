import Header from "../../component/header/header"
import Detail from "../../component/detail/detail"
import "./index.css"

function DetailPage () {
  return (
    <div className="wrapperDetail">
      <div className="headerDetail">
        <Header />
      </div>
      <div className="detailPage1">
        <Detail />
      </div>
    </div>


  )
}
export default DetailPage