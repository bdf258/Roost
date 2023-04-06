import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const token = 'pk.eyJ1IjoiYmRmIiwiYSI6ImNsZzB6YTZ3NjAwdWwzbHIwMXJ0M2xzMXoifQ.anJD_jPpM1y8Df5fehcOIw';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={token}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default Map;