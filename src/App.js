import Homepage from "./reactjs/homepagePresenter.js"
import Globe from "./reactjs/globePresenter.js";
const Show=require("./show.js").default;
require("./navigation.js")
function App(props) {
  return (
    <div className="flexParent">
      <div className="sidebar"> <Globe/> </div>
      <div className="mainContent">
      <Show hash="#homepage"><Homepage model={props.model}/></Show>
      {/*<Show hash="#details"><Details model={props.model}/></Show>*/}
      {/*<Show hash="#summary"><Summary model={props.model}/></Show>*/}
      {/*<Show hash="#confirmation"><Confirmation model={props.model}/></Show>*/}
      </div>
    </div>
  );
}

export default App;
