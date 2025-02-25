import { FC } from 'react';
import { MapContainer, Marker, Popup, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapProps } from './type/type';
import { Feature, FeatureCollection, Geometry } from 'geojson';
import { Layer } from 'leaflet';

import provinceGeoJsonData from './constants/province.geo.json';

const Province: FC<MapProps> = ({
  center,
  zoom,
  dataPoints,
  onFeatureClick,
}) => {
  const geoJsonData: FeatureCollection =
    provinceGeoJsonData as FeatureCollection;

  // Default feature click handler if no custom function is provided
  const handleFeatureClick = (feature: Feature<Geometry, any>) => {
    if (onFeatureClick) {
      onFeatureClick(feature);
    } else {
      alert(feature.properties?.PR_NAME);
    }
  };

  const onEachFeature = (feature: Feature<Geometry, any>, layer: Layer) => {
    layer.on({
      click: () => handleFeatureClick(feature),
    });
  };

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />

      <GeoJSON data={geoJsonData} onEachFeature={onEachFeature} />

      {/* Render markers */}
      {dataPoints &&
        dataPoints.map((point, index) => (
          <Marker key={index} position={point.position}>
            <Popup>{point.description}</Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Province;
