import Homepage from "./reactjs/homepagePresenter.js"

function App(props) {
  return (
    <div>
        <Homepage model= {props.model}/>
    </div>
  );
}

export default App;
