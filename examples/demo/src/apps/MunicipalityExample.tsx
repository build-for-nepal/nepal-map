import { Municipality } from '../../../../src';

export function MunicipalityExample() {
  return (
    <Municipality
      center={[28.3949, 84.124]}
      zoom={7}
      dataPoints={[
        { position: [27.7, 85.3], description: 'Kathmandu' },
        { position: [28.2, 83.9], description: 'Pokhara' },
      ]}
    />
  );
}
