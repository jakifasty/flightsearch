import Homepage from "./reactjs/homepagePresenter.js"
import Details from "./reactjs/detailsPresenter.js"
import Globe from "./reactjs/globePresenter.js";
import SidebarFirebase from "./reactjs/sidebarFirebasePresenter.js";
//import Sidebar from "./reactjs/sidebarPresenter.js";

const Show=require("./show.js").default;
require("./navigation.js")
require("./utils.js")

window.location.hash = "homepage"

function App(props) {
  return (
    <div>
      <div>
        <Globe/>
        {/*<Show hash="#sidebar"><SidebarFirebase model={props.model}/></Show>*/}
      </div>
      <div>
        <Show hash="#homepage">{<Homepage model={props.model}/>}</Show>
        <Show hash="#details"><Details model={props.model}/></Show>
        {/*<Show hash="#summary"><Summary model={props.model}/></Show>*/}
        {/*<Show hash="#confirmation"><Confirmation model={props.model}/></Show>*/}
      </div>
    </div>
  );
}

export default App;
