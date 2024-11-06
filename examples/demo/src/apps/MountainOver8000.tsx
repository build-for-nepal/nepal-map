import { Map } from '../../../../src/index';
import Card from '../component/Card';
import { mountainsOver8000m } from '../constants/mountain-over.8000';

const MountainOver8000 = () => {
  const dataPoints = mountainsOver8000m.map(
    ({ coordinates, name, description, elevation }) => ({
      position: coordinates as unknown as [number, number],
      description: (
        <Card property={{ name: `${name} (${elevation})`, description }} />
      ),
    }),
  );

  return <Map center={[28.3949, 84.124]} zoom={7} dataPoints={dataPoints} />;
};

export default MountainOver8000;
