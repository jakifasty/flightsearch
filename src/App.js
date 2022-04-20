import Homepage from "./reactjs/homepagePresenter.js"
import Globe from "./reactjs/globePresenter.js";
import SidebarFirebase from "./reactjs/sidebarFirebasePresenter.js";
//import Details from "./reactjs/detailsPresenter.js";
//import Sidebar from "./reactjs/sidebarPresenter.js";

const Show=require("./show.js").default;
require("./navigation.js")
require("./utils.js")

function App(props) {
  return (
    <div className="flexParent">
      <div className="flexible-sidebar-right"> 
        <Globe/>
        {<Show hash="#sidebar"><SidebarFirebase model={props.model}/></Show>}
      </div>
      <div className="flexible-items-left">
      <Show hash="#homepage"><Homepage model={props.model}/></Show>
      {/*<Show hash="#details"><Details model={props.model}/></Show>*/}
      {/*<Show hash="#summary"><Summary model={props.model}/></Show>*/}
      {/*<Show hash="#confirmation"><Confirmation model={props.model}/></Show>*/}
      </div>
    </div>
  );
}

export default App;
