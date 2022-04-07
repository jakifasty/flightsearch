import Homepage from "./reactjs/homepagePresenter.js"
const Show=require("./show.js").default;
require("./navigation.js")
function App(props) {
  return (
    <div>
        <Show hash="#homepage"><Homepage model= {props.model}/></Show>
    </div>
  );
}

export default App;
