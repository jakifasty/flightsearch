import Globe from 'react-globe.gl';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";


function GlobeView(props) {


  return (

  <div>
    <Helmet>
      <script src="//unpkg.com/react/umd/react.production.min.js"></script>
      <script src="//unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
      <script src="//unpkg.com/babel-standalone"></script>

      <script src="//unpkg.com/react-globe.gl"></script>

    </ Helmet>

    <div id="globeViz">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={ [...Array(300).keys()].map(() => ({
                            lat: (Math.random() - 0.5) * 180,
                            lng: (Math.random() - 0.5) * 360,
                            size: Math.random() / 3,
                            color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
                          })) }
        pointAltitude={Math.random() / 3}
        pointColor={['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]}

        
        />
    </div>
  </div>
  );
}
export default GlobeView;
