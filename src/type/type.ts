import { LatLngExpression } from 'leaflet';
import { FeatureCollection } from 'geojson';

export interface MapDataPoint {
  position: LatLngExpression;
  description: string;
}

export interface MapProps {
  center: LatLngExpression;
  zoom: number;
  dataPoints?: MapDataPoint[];
  onFeatureClick?: (feature: any) => void; // Optional callback for feature clicks
}
