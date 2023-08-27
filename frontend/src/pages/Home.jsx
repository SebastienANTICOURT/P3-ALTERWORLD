import Text from "../components/Text"
import FiltresBar from "../components/FiltresBar"
import "./Home.scss"

function Home() {
  return (
    <div className="Home">
      <div className="TextH">
        <Text />
      </div>
      <div className="FiltresBarH">
        <FiltresBar />
      </div>
    </div>
  )
}

export default Home
