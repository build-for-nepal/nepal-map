import { LatLngExpression } from 'leaflet';
import { ReactNode } from 'react';

export interface MapDataPoint {
  position: LatLngExpression;
  description: ReactNode | string;
}

export interface MapProps {
  center: LatLngExpression;
  zoom: number;
  dataPoints?: MapDataPoint[];
  onFeatureClick?: (feature: any) => void; // Optional callback for feature clicks
}
