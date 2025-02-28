import { Zone } from '../../../../src';

const ZoneExample = () => {
  return (
    <Zone
      center={[28.3949, 84.124]}
      zoom={7}
      dataPoints={[
        { position: [27.7, 85.3], description: 'Kathmandu' },
        { position: [28.2, 83.9], description: 'Pokhara' },
      ]}
    />
  );
};

export default ZoneExample;
