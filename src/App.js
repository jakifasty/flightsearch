import Homepage from "./reactjs/homepagePresenter.js"
import Globe from "./reactjs/globePresenter.js";

function App(props) {
  return (
    <div className="flexParent">
      <div className="sidebar"> <Globe /> </div>
      <div className="mainContent">
        <Homepage model= {props.model}/>
      </div>
    </div>
  );
}

export default App;
